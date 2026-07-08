/** Tawk.to live chat widget property + widget IDs (from the Tawk.to dashboard). */
export const TAWK_PROPERTY_ID =
  process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ?? "6a4ec23ea6558f1d451fd6b5";

export const TAWK_WIDGET_ID =
  process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? "1jt1qdhan";

export const TAWK_EMBED_SRC = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
