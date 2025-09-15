interface heroAssetsType {
  bannerProps: {
    imageUrl: string;
    url: string;
  }[];
  topAdBanner: {
    imageUrl: string;
    url: string;
  };
  bottomAdBanner: {
    imageUrl: string;
    url: string;
  };
}

export const heroAssets: heroAssetsType = {
  bannerProps: [
    {
      imageUrl: '/images/hero/Widget.png',
      url: 'offer/gaming-console'
    },
    {
      imageUrl: '/images/hero/Widget.png',
      url: 'offer/gaming-console'
    },
    {
      imageUrl: '/images/hero/Widget.png',
      url: 'offer/gaming-console'
    },
  ],
  topAdBanner: {
    imageUrl: '/images/hero/Widget(1).png',
    url: 'offer/smartphone'
  },
  bottomAdBanner: {
    imageUrl: '/images/hero/Widget(2).png',
    url: 'offer/watches-accessories'
  },
}