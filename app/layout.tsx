import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Budget Enforcer — Stop Overspending on AI Experiments",
  description: "Set hard stops and alerts when prompt testing exceeds budget. Monitor OpenAI and Anthropic API costs in real time."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0fcedd2d-ab85-4886-b42c-6446078da318"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
