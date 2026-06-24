import Script from "next/script";

export default function AssistrioChat() {
  return (
    <>
      <Script id="assistrio-chat-config" strategy="beforeInteractive">
        {`
          window.AssistrioChatConfig = {
            botId: "6a3b50ff6b9eb8dbcd14bf87",
            apiBaseUrl: "https://chat.assistrio.com",
            accessKey: "pk_u99BM5-MTiWxw8SrSGD7oZZrvXW50OP4",
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
