import type { Metadata } from "next";
import AssistrioIframe from "@/components/AssistrioIframe";

export const metadata: Metadata = {
  title: "Chat — Notech",
  description: "Chat with Notech AI assistant.",
};

export default function ChatPage() {
  return <AssistrioIframe />;
}
