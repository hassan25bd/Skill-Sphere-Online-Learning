import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ConditionalShell } from "@/components/conditional-shell";
import { Providers } from "@/components/providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillSphere",
  description: "Online courses for web dev, design, marketing and more. Learn at your own pace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-app text-app-foreground">
        <Providers>
          <ConditionalShell>{children}</ConditionalShell>
        </Providers>
      </body>
    </html>
  );
}
