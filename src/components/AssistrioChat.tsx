import Script from "next/script";

export default function AssistrioChat() {
  return (
    <>
      <Script id="assistrio-chat-config" strategy="beforeInteractive">
        {`
          window.AssistrioChatConfig = {
            botId: "6aaf8922ea664b0c0e15bf88",
            apiBaseUrl: "https://chat.assistrio.com",
            accessKey: "pk_dAoV6PLOWKRavt64-tJZGDlS0DuvpVb6",
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
