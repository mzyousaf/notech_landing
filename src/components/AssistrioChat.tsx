import Script from "next/script";

// Assistrio agent "Nova" — one install code loads both the Chat Widget (bubble)
// and Center Stage (full-page chat, opened by any [data-assistrio-center-stage] element).
export const ASSISTRIO_AGENT_ID = "6b08bb24f86cb862134f4dac";
export const ASSISTRIO_HELP_PAGE_URL = `https://app.assistrio.com/${ASSISTRIO_AGENT_ID}/nova`;

const WIDGET_ORIGIN = "https://widget.assistrio.com";
const API_BASE_URL = "https://chat.assistrio.com";

export default function AssistrioChat() {
  return (
    <>
      <link
        rel="stylesheet"
        href={`${WIDGET_ORIGIN}/assistrio-chat.css`}
        precedence="default"
      />
      {/* Set both configs first, then add the loader, so the order is guaranteed. */}
      <Script id="assistrio-chat" strategy="afterInteractive">
        {`
          window.AssistrioChatConfig = {
            agentId: "${ASSISTRIO_AGENT_ID}",
            apiBaseUrl: "${API_BASE_URL}",
            position: "right"
          };
          window.AssistrioCenterStageConfig = {
            agentId: "${ASSISTRIO_AGENT_ID}",
            apiBaseUrl: "${API_BASE_URL}"
          };
          if (!document.getElementById("assistrio-chat-loader")) {
            var s = document.createElement("script");
            s.id = "assistrio-chat-loader";
            s.src = "${WIDGET_ORIGIN}/assistrio-chat.js";
            s.async = true;
            document.body.appendChild(s);
          }
        `}
      </Script>
    </>
  );
}
