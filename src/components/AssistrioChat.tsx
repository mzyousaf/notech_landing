import Script from "next/script";

export default function AssistrioChat() {
  return (
    <>
      <Script id="assistrio-chat-config" strategy="beforeInteractive">
        {`
          window.AssistrioChatConfig = {
            botId: "6a337d03b7404b3486718751",
            apiBaseUrl: "https://chat.assistrio.com",
            accessKey: "pk_gaoaCavmQvkAI21DNQqdXZfJVKHMTAP7",
            position: "right"
          };
        `}
      </Script>
      <Script
        src="https://widget.assistrio.com/assistrio-chat.js"
        strategy="afterInteractive"
      />
    </>
  );
}
