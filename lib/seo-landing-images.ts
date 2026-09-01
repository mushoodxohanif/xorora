/**
 * Unique Unsplash stock photos per unlisted stack SEO landing page.
 * No photo ID is reused across these pages (industries, cost, mid-CTA).
 */

export const unsplashPhoto = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SEO_LANDING_IMAGES = {
  python: {
    industries: {
      fintech: unsplashPhoto("photo-1563986768609-322da13575f3"),
      saas: unsplashPhoto("photo-1460925895917-afdab827c52f"),
      healthcare: unsplashPhoto("photo-1576091160399-112ba8d25d1d"),
      logistics: unsplashPhoto("photo-1586528116311-ad8dd3c8310d"),
      ecommerce: unsplashPhoto("photo-1472851294608-062f824d29cc"),
    },
    cost: unsplashPhoto("photo-1551288049-bebda4e38f71"),
    midCta: unsplashPhoto("photo-1519389950473-47ba0277781c"),
  },
  nodejs: {
    industries: {
      saas: unsplashPhoto("photo-1552664730-d307ca884978"),
      fintech: unsplashPhoto("photo-1563013544-824ae1b704d3"),
      logistics: unsplashPhoto("photo-1553413077-190dd305871c"),
      ecommerce: unsplashPhoto("photo-1556742049-0cfed4f6a45d"),
      healthcare: unsplashPhoto("photo-1579684385127-1ef15d508118"),
    },
    cost: unsplashPhoto("photo-1451187580459-43490279c0fa"),
    midCta: unsplashPhoto("photo-1600880292089-90a7e086ee0c"),
  },
  laravel: {
    industries: {
      saas: unsplashPhoto("photo-1551434678-e076c223a692"),
      ecommerce: unsplashPhoto("photo-1483985988355-763728e1935b"),
      edtech: unsplashPhoto("photo-1523240795612-9a054b0db644"),
      realestate: unsplashPhoto("photo-1560518883-ce09059eeffa"),
      healthcare: unsplashPhoto("photo-1519494026892-80bbd2d6fd0d"),
    },
    cost: unsplashPhoto("photo-1554224155-6726b3ff858f"),
    midCta: unsplashPhoto("photo-1522202176988-66273c2fd55f"),
  },
  django: {
    industries: {
      publishing: unsplashPhoto("photo-1517245386807-bb43f82c33c4"),
      edtech: unsplashPhoto("photo-1503676260728-1c00da094a0b"),
      healthcare: unsplashPhoto("photo-1631217868264-e5b90bb7e133"),
      marketplace: unsplashPhoto("photo-1556740758-90de374c12ad"),
      data: unsplashPhoto("photo-1611974789855-9c2a0a7236a3"),
    },
    cost: unsplashPhoto("photo-1559136555-9303baea8ebd"),
    midCta: unsplashPhoto("photo-1600880292203-757bb62b4baf"),
  },
  dotnet: {
    industries: {
      fintech: unsplashPhoto("photo-1484154218962-a197022b5858"),
      healthcare: unsplashPhoto("photo-1666214280557-f1b5022eb634"),
      manufacturing: unsplashPhoto("photo-1581578731548-c64695cc6952"),
      government: unsplashPhoto("photo-1486406146926-c627a92ad1ab"),
      enterprise: unsplashPhoto("photo-1521737711867-e3b97375f902"),
    },
    cost: unsplashPhoto("photo-1578575437130-527eed3abbec"),
    midCta: unsplashPhoto("photo-1560448204-e02f11c3d0e2"),
  },
  flutter: {
    industries: {
      retail: unsplashPhoto("photo-1607082348824-0a96f2a4b9da"),
      logistics: unsplashPhoto("photo-1580674285054-bed31e145f59"),
      fintech: unsplashPhoto("photo-1551882547-ff40c63fe5fa"),
      healthcare: unsplashPhoto("photo-1584820927498-cfe5211fd8bf"),
      marketplace: unsplashPhoto("photo-1590490360182-c33d57733427"),
    },
    cost: unsplashPhoto("photo-1445019980597-93fa8acb246c"),
    midCta: unsplashPhoto("photo-1509062522246-3755977927d7"),
  },
  java: {
    industries: {
      banking: unsplashPhoto("photo-1559526324-593bc073d938"),
      insurance: unsplashPhoto("photo-1450101499163-c8848c66ca85"),
      telecom: unsplashPhoto("photo-1558618666-fcd25c85cd64"),
      retail: unsplashPhoto("photo-1441986300917-64674bd600d8"),
      logistics: unsplashPhoto("photo-1494412574643-ff11b0a5c1c3"),
    },
    cost: unsplashPhoto("photo-1558494949-ef010cbdcc31"),
    midCta: unsplashPhoto("photo-1522071820081-009f0129c71c"),
  },
  pythonApp: {
    industries: {
      saas: unsplashPhoto("photo-1553877522-43269d4ea984"),
      fintech: unsplashPhoto("photo-1642790103337-fb15126f3041"),
      ai: unsplashPhoto("photo-1677442136019-21780ecad995"),
      automation: unsplashPhoto("photo-1454165804606-c3d57bc86b40"),
      data: unsplashPhoto("photo-1533750345-63e4b756379a"),
    },
    cost: unsplashPhoto("photo-1504639725590-34d0984388bd"),
    midCta: unsplashPhoto("photo-1517694712202-14dd9538aa97"),
  },
} as const;
