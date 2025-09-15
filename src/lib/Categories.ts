export const categories = [
  {
    _id: "1",
    name: "Computer & Laptop",
    slug: "computer-laptop",
    image: {
      url: "https://example.com/images/computer-laptop.jpg",
      publicId: "computer-laptop-123"
    },
    subcategory: [
      {
        name: "Laptops",
        slug: "laptops",
        isActive: true,
        category: {
          slug: "computer-laptop"
        }
      },
      {
        name: "Desktops",
        slug: "desktops",
        isActive: true,
        category: {
          slug: "computer-laptop"
        }
      },
      {
        name: "Monitors",
        slug: "monitors",
        isActive: true,
        category: {
          slug: "computer-laptop"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "2",
    name: "SmartPhone",
    slug: "smartphone",
    image: {
      url: "https://example.com/images/smartphone.jpg",
      publicId: "smartphone-123"
    },
    subcategory: [
      {
        name: "Android Phones",
        slug: "android-phones",
        isActive: true,
        category: {
          slug: "smartphone"
        }
      },
      {
        name: "iPhones",
        slug: "iphones",
        isActive: true,
        category: {
          slug: "smartphone"
        }
      },
      {
        name: "Accessories",
        slug: "phone-accessories",
        isActive: true,
        category: {
          slug: "smartphone"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "3",
    name: "Computer Accessories",
    slug: "computer-accessories",
    image: {
      url: "https://example.com/images/computer-accessories.jpg",
      publicId: "computer-accessories-123"
    },
    subcategory: [
      {
        name: "Keyboards",
        slug: "keyboards",
        isActive: true,
        category: {
          slug: "computer-accessories"
        }
      },
      {
        name: "Mice",
        slug: "mice",
        isActive: true,
        category: {
          slug: "computer-accessories"
        }
      },
      {
        name: "Webcams",
        slug: "webcams",
        isActive: true,
        category: {
          slug: "computer-accessories"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "4",
    name: "Headphone",
    slug: "headphone",
    image: {
      url: "https://example.com/images/headphone.jpg",
      publicId: "headphone-123"
    },
    subcategory: [
      {
        name: "Wireless Headphones",
        slug: "wireless-headphones",
        isActive: true,
        category: {
          slug: "headphone"
        }
      },
      {
        name: "Gaming Headsets",
        slug: "gaming-headsets",
        isActive: true,
        category: {
          slug: "headphone"
        }
      },
      {
        name: "Earbuds",
        slug: "earbuds",
        isActive: true,
        category: {
          slug: "headphone"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "5",
    name: "Mobile Accessories",
    slug: "mobile-accessories",
    image: {
      url: "https://example.com/images/mobile-accessories.jpg",
      publicId: "mobile-accessories-123"
    },
    subcategory: [
      {
        name: "Phone Cases",
        slug: "phone-cases",
        isActive: true,
        category: {
          slug: "mobile-accessories"
        }
      },
      {
        name: "Chargers",
        slug: "chargers",
        isActive: true,
        category: {
          slug: "mobile-accessories"
        }
      },
      {
        name: "Power Banks",
        slug: "power-banks",
        isActive: true,
        category: {
          slug: "mobile-accessories"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "6",
    name: "Gaming Console",
    slug: "gaming-console",
    image: {
      url: "https://example.com/images/gaming-console.jpg",
      publicId: "gaming-console-123"
    },
    subcategory: [
      {
        name: "PlayStation",
        slug: "playstation",
        isActive: true,
        category: {
          slug: "gaming-console"
        }
      },
      {
        name: "Xbox",
        slug: "xbox",
        isActive: true,
        category: {
          slug: "gaming-console"
        }
      },
      {
        name: "Nintendo",
        slug: "nintendo",
        isActive: true,
        category: {
          slug: "gaming-console"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "7",
    name: "Camera & Photo",
    slug: "camera-photo",
    image: {
      url: "https://example.com/images/camera-photo.jpg",
      publicId: "camera-photo-123"
    },
    subcategory: [
      {
        name: "DSLR Cameras",
        slug: "dslr-cameras",
        isActive: true,
        category: {
          slug: "camera-photo"
        }
      },
      {
        name: "Mirrorless Cameras",
        slug: "mirrorless-cameras",
        isActive: true,
        category: {
          slug: "camera-photo"
        }
      },
      {
        name: "Lenses",
        slug: "camera-lenses",
        isActive: true,
        category: {
          slug: "camera-photo"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "8",
    name: "TV & Homes Appliances",
    slug: "tv-home-appliances",
    image: {
      url: "https://example.com/images/tv-home-appliances.jpg",
      publicId: "tv-home-appliances-123"
    },
    subcategory: [
      {
        name: "Smart TVs",
        slug: "smart-tvs",
        isActive: true,
        category: {
          slug: "tv-home-appliances"
        }
      },
      {
        name: "Refrigerators",
        slug: "refrigerators",
        isActive: true,
        category: {
          slug: "tv-home-appliances"
        }
      },
      {
        name: "Washing Machines",
        slug: "washing-machines",
        isActive: true,
        category: {
          slug: "tv-home-appliances"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "9",
    name: "Watchs & Accessories",
    slug: "watches-accessories",
    image: {
      url: "https://example.com/images/watches-accessories.jpg",
      publicId: "watches-accessories-123"
    },
    subcategory: [
      {
        name: "Smart Watches",
        slug: "smart-watches",
        isActive: true,
        category: {
          slug: "watches-accessories"
        }
      },
      {
        name: "Analog Watches",
        slug: "analog-watches",
        isActive: true,
        category: {
          slug: "watches-accessories"
        }
      },
      {
        name: "Watch Bands",
        slug: "watch-bands",
        isActive: true,
        category: {
          slug: "watches-accessories"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "10",
    name: "GPS & Navigation",
    slug: "gps-navigation",
    image: {
      url: "https://example.com/images/gps-navigation.jpg",
      publicId: "gps-navigation-123"
    },
    subcategory: [
      {
        name: "Car GPS",
        slug: "car-gps",
        isActive: true,
        category: {
          slug: "gps-navigation"
        }
      },
      {
        name: "Handheld GPS",
        slug: "handheld-gps",
        isActive: true,
        category: {
          slug: "gps-navigation"
        }
      },
      {
        name: "Navigation Apps",
        slug: "navigation-apps",
        isActive: true,
        category: {
          slug: "gps-navigation"
        }
      }
    ],
    isActive: true
  },
  {
    _id: "11",
    name: "Warable Technology",
    slug: "wearable-technology",
    image: {
      url: "https://example.com/images/wearable-technology.jpg",
      publicId: "wearable-technology-123"
    },
    subcategory: [
      {
        name: "Fitness Trackers",
        slug: "fitness-trackers",
        isActive: true,
        category: {
          slug: "wearable-technology"
        }
      },
      {
        name: "Smart Glasses",
        slug: "smart-glasses",
        isActive: true,
        category: {
          slug: "wearable-technology"
        }
      },
      {
        name: "Health Monitors",
        slug: "health-monitors",
        isActive: true,
        category: {
          slug: "wearable-technology"
        }
      }
    ],
    isActive: true
  }
];