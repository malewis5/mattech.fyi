"use client";
import Script from "next/script";

export const TrackingScripts = () => {
  return (
    <Script
      strategy="lazyOnload"
      src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TyiGFC"
    />
  );
};
