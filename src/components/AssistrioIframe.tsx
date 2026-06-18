"use client";

import { useEffect, useState } from "react";

const IFRAME_BASE =
  "https://app.assistrio.com/iframe/6a337d03b7404b3486718751?accessKey=pk_gaoaCavmQvkAI21DNQqdXZfJVKHMTAP7";

export default function AssistrioIframe() {
  const [src, setSrc] = useState(IFRAME_BASE);

  useEffect(() => {
    setSrc(
      `${IFRAME_BASE}&parentPageUrl=${encodeURIComponent(window.location.href)}`,
    );
  }, []);

  return (
    <iframe
      src={src}
      style={{
        width: "100%",
        height: "650px",
        border: 0,
        borderRadius: "16px",
      }}
      allow="clipboard-write; microphone"
      title="Assistrio chat"
    />
  );
}
