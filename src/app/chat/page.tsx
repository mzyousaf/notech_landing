import type { Metadata } from "next";
import AssistrioIframe from "@/components/AssistrioIframe";

export const metadata: Metadata = {
  title: "Chat — Nova AI",
  description: "Speak with the Nova AI assistant.",
};

export default function ChatPage() {
  return <AssistrioIframe />;
}
