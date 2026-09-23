import type { Metadata } from "next";
import AssistrioIframe from "@/components/AssistrioIframe";

export const metadata: Metadata = {
  title: "Chat — Nova Labs",
  description: "Speak with the Nova Labs assistant.",
};

export default function ChatPage() {
  return <AssistrioIframe />;
}
