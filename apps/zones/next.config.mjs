const { OMS_URL, TMS_URL, WMS_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/oms",
        destination: `${OMS_URL}`,
      },
      {
        source: "/oms/:path+",
        destination: `${OMS_URL}/:path+`,
      },
      {
        source: "/oms-static/_next/:path+",
        destination: `${OMS_URL}/oms-static/_next/:path+`,
      },
      {
        source: "/tms",
        destination: `${TMS_URL}`,
      },
      {
        source: "/tms/:path+",
        destination: `${TMS_URL}/:path+`,
      },
      {
        source: "/tms-static/_next/:path+",
        destination: `${TMS_URL}/tms-static/_next/:path+`,
      },
      {
        source: "/wms",
        destination: `${WMS_URL}`,
      },
      {
        source: "/wms/:path+",
        destination: `${WMS_URL}/:path+`,
      },
      {
        source: "/wms-static/_next/:path+",
        destination: `${WMS_URL}/wms-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
