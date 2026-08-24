import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import sharp from "sharp";

const SRC = String.raw`c:\Users\Lenovo\Downloads\Elvra\Elvra\Laundry bag`;
const DEST = path.join(
  process.cwd(),
  "public",
  "assets",
  "case-studies",
  "amazon-au-laundry-bag-launch",
);

const LISTING = [
  ["LISTING/1.png", "hero.webp"],
  ["LISTING/2.png", "listing-01-sized.webp"],
  ["LISTING/3.png", "listing-02-every-size.webp"],
  ["LISTING/4.png", "listing-03-protects-wash.webp"],
  ["LISTING/5.jpg", "listing-04-secure-zip.webp"],
  ["LISTING/6.png", "listing-05-everyday.webp"],
];

const APLUS = [
  ["A+/Desktop/1.jpg", "aplus-01-size-every-wash.webp"],
  ["A+/Desktop/module 1.jpg", "aplus-02-module-1.webp"],
  ["A+/Desktop/module 2.jpg", "aplus-03-module-2.webp"],
  ["A+/Desktop/module 3.jpg", "aplus-04-module-3.webp"],
  ["A+/Desktop/module 4.jpg", "aplus-05-module-4.webp"],
];

function findFfmpeg() {
  const candidates = [
    "ffmpeg",
    String.raw`C:\ffmpeg\bin\ffmpeg.exe`,
    path.join(
      process.env.LOCALAPPDATA ?? "",
      "Microsoft",
      "WinGet",
      "Links",
      "ffmpeg.exe",
    ),
    path.join(
      process.env.LOCALAPPDATA ?? "",
      "Microsoft",
      "WinGet",
      "Packages",
    ),
  ];
  for (const c of candidates) {
    if (c.endsWith("Packages") && fs.existsSync(c)) {
      // search one level for Gyan.FFmpeg
      try {
        const dirs = fs.readdirSync(c).filter((d) => d.startsWith("Gyan.FFmpeg"));
        for (const d of dirs) {
          const bin = path.join(c, d, "ffmpeg-*-full_build", "bin", "ffmpeg.exe");
          // resolve glob manually
          const base = path.join(c, d);
          if (!fs.existsSync(base)) continue;
          for (const sub of fs.readdirSync(base)) {
            const exe = path.join(base, sub, "bin", "ffmpeg.exe");
            if (fs.existsSync(exe)) return exe;
          }
        }
      } catch {
        /* ignore */
      }
    } else if (c === "ffmpeg") {
      try {
        execFileSync(c, ["-version"], { stdio: "ignore" });
        return c;
      } catch {
        /* ignore */
      }
    } else if (fs.existsSync(c)) {
      return c;
    }
  }
  return null;
}

async function toWebp(relSrc, outName) {
  const input = path.join(SRC, relSrc);
  const output = path.join(DEST, outName);
  if (!fs.existsSync(input)) {
    throw new Error(`Missing source: ${input}`);
  }
  await sharp(input)
    .rotate()
    .webp({ quality: 90, effort: 4 })
    .toFile(output);
  const { size } = fs.statSync(output);
  console.log(`  ${outName} (${(size / 1024).toFixed(0)} KB)`);
}

function pickVideoSource() {
  const product = path.join(SRC, "Video", "laundry bag product video.mp4");
  const alt = path.join(SRC, "Video", "laundry bag.mp4");
  // Prefer the named product video when present; fall back to shorter file.
  if (fs.existsSync(product)) return product;
  if (fs.existsSync(alt)) return alt;
  throw new Error("No source video found");
}

function exportVideo(ffmpeg) {
  const src = pickVideoSource();
  const outMp4 = path.join(DEST, "product-15s.mp4");
  const posterJpg = path.join(DEST, "_poster-frame.jpg");
  const posterWebp = path.join(DEST, "video-poster.webp");
  const thumb = path.join(SRC, "Video", "Video Thumbnail.jpg");

  console.log(`  video source: ${path.basename(src)}`);
  execFileSync(
    ffmpeg,
    [
      "-y",
      "-ss",
      "0",
      "-i",
      src,
      "-t",
      "15",
      "-an",
      "-c:v",
      "libx264",
      "-preset",
      "medium",
      "-crf",
      "23",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      outMp4,
    ],
    { stdio: "inherit" },
  );
  const { size } = fs.statSync(outMp4);
  console.log(`  product-15s.mp4 (${(size / 1024 / 1024).toFixed(1)} MB)`);

  if (fs.existsSync(thumb)) {
    return sharp(thumb)
      .rotate()
      .webp({ quality: 90, effort: 4 })
      .toFile(posterWebp)
      .then(() => {
        const s = fs.statSync(posterWebp);
        console.log(`  video-poster.webp from thumbnail (${(s.size / 1024).toFixed(0)} KB)`);
      });
  }

  execFileSync(
    ffmpeg,
    ["-y", "-ss", "2", "-i", outMp4, "-frames:v", "1", posterJpg],
    { stdio: "inherit" },
  );
  return sharp(posterJpg)
    .webp({ quality: 90, effort: 4 })
    .toFile(posterWebp)
    .then(() => {
      fs.unlinkSync(posterJpg);
      const s = fs.statSync(posterWebp);
      console.log(`  video-poster.webp (${(s.size / 1024).toFixed(0)} KB)`);
    });
}

fs.mkdirSync(DEST, { recursive: true });
console.log("Importing laundry bag assets →", DEST);

for (const [src, dest] of LISTING) {
  await toWebp(src, dest);
}
for (const [src, dest] of APLUS) {
  await toWebp(src, dest);
}

const ffmpeg = findFfmpeg();
if (!ffmpeg) {
  console.error("ffmpeg not found — install Gyan.FFmpeg or add ffmpeg to PATH");
  process.exit(1);
}
console.log("Using ffmpeg:", ffmpeg);
await exportVideo(ffmpeg);
console.log("Done.");
