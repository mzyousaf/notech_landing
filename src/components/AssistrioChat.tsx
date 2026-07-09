import Script from "next/script";

export default function AssistrioChat() {
  return (
    <>
      <Script id="assistrio-chat-config" strategy="beforeInteractive">
        {`
          window.AssistrioChatConfig = {
            botId: "6a4f0ea979616981427be06b",
            apiBaseUrl: "https://chat.assistrio.com",
            accessKey: "pk_0hy36HKYx2w9hjeaMv9m99L4nnawj3-b",
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
