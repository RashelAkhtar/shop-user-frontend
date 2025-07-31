import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="ad-container" style={{ textAlign: "center", marginTop: "20px" }}>
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-3345736580776128"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdBanner;
