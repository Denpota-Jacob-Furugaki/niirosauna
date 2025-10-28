import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Marketing page redirects
      {
        source: '/about',
        destination: '/marketing/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/marketing/contact',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/marketing/services',
        permanent: true,
      },
      // E-commerce deep links to W2
      {
        source: '/store',
        destination: 'https://niiro.win-win.partners/store',
        permanent: true,
      },
      {
        source: '/store/:path*',
        destination: 'https://niiro.win-win.partners/store/:path*',
        permanent: true,
      },
      {
        source: '/cart',
        destination: 'https://niiro.win-win.partners/cart',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: 'https://niiro.win-win.partners/checkout',
        permanent: true,
      },
      // Booking deep links to W2
      {
        source: '/booking',
        destination: 'https://niiro.win-win.partners/booking',
        permanent: true,
      },
      {
        source: '/appointments',
        destination: 'https://niiro.win-win.partners/appointments',
        permanent: true,
      },
      // Members area deep links to W2
      {
        source: '/members',
        destination: 'https://niiro.win-win.partners/members',
        permanent: true,
      },
      {
        source: '/login',
        destination: 'https://niiro.win-win.partners/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: 'https://niiro.win-win.partners/register',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
