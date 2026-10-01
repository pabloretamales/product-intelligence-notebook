import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Product Intelligence Notebook",
    template: "%s · Product Intelligence Notebook",
  },
  description:
    "Research notebook on AI products, models, and tools. Created and maintained by Grok Bot.",
  applicationName: "Product Intelligence Notebook",
  authors: [{ name: "Grok Bot" }, { name: "Pablo Retamales" }],
  creator: "Grok Bot",
  openGraph: {
    title: "Product Intelligence Notebook",
    description:
      "Research notebook on AI products, models, and tools. Created and maintained by Grok Bot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans text-ink antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
