export const siteSettings = {
  name: 'ChawkBazar',
  description: 'Fastest E-commerce template built with React, Vite, TypeScript, React Query and Tailwind CSS',
  author: {
    name: 'RedQ, Inc.',
    websiteUrl: 'https://redq.io',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.svg',
    alt: 'ChawkBazar',
    href: '/',
    width: 95,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'menu-home',
      },
      {
        id: 2,
        path: '/search',
        label: 'menu-categories',
      },
      {
        id: 3,
        path: '/search',
        label: 'menu-search',
      },
      {
        id: 4,
        path: '/contact',
        label: 'menu-contact-us',
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى',
        value: 'ar',
        icon: '/assets/images/flags/ar.png',
      },
      {
        id: 'zh',
        name: '中国人',
        value: 'zh',
        icon: '/assets/images/flags/zh.png',
      },
      {
        id: 'en',
        name: 'English',
        value: 'en',
        icon: '/assets/images/flags/en.png',
      },
      {
        id: 'de',
        name: 'Deutsch',
        value: 'de',
        icon: '/assets/images/flags/de.png',
      },
      {
        id: 'he',
        name: 'rעברית',
        value: 'he',
        icon: '/assets/images/flags/he.png',
      },
      {
        id: 'es',
        name: 'Español',
        value: 'es',
        icon: '/assets/images/flags/es.png',
      },
    ],
  },
  heroBanner: {
    title: 'hero-banner-title',
    description: 'hero-banner-description',
    image: '/assets/images/hero/banner-1.jpg',
    searchPlaceholder: 'search-placeholder',
  },
  promotionBanner: [
    {
      id: 1,
      title: 'banner-sale-offer',
      slug: '/search',
      image: '/assets/images/banner/banner-sale-offer.jpg',
      type: 'medium',
    },
    {
      id: 2,
      title: 'banner-sale-offer-reverse',
      slug: '/search',
      image: '/assets/images/banner/banner-sale-offer-reverse.jpg',
      type: 'medium',
    },
  ],
  bannerCard: [
    {
      id: 1,
      title: 'banner-card-title-one',
      slug: '/search',
      image: '/assets/images/banner/banner-card-1.jpg',
      type: 'small',
    },
    {
      id: 2,
      title: 'banner-card-title-two',
      slug: '/search',
      image: '/assets/images/banner/banner-card-2.jpg',
      type: 'small',
    },
    {
      id: 3,
      title: 'banner-card-title-three',
      slug: '/search',
      image: '/assets/images/banner/banner-card-3.jpg',
      type: 'small',
    },
  ],
}