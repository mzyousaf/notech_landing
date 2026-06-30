import Script from "next/script";

export default function AssistrioChat() {
  return (
    <>
      <Script id="assistrio-chat-config" strategy="beforeInteractive">
        {`
          window.AssistrioChatConfig = {
            botId: "6a43433c7ee5ba524f8d852d",
            apiBaseUrl: "https://chat.assistrio.com",
            accessKey: "pk_z73jnVmkeO99MT2CaBbX9ExOYXXNjUsV",
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
