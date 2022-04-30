import React, { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <ins
      className="adsbygoogle"
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
      data-ad-slot="9008533812"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
