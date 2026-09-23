"use client";

import { useEffect, useState } from "react";

const IFRAME_BASE =
  "https://app.assistrio.com/iframe/6aaf8922ea664b0c0e15bf88?accessKey=pk_dAoV6PLOWKRavt64-tJZGDlS0DuvpVb6";

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
