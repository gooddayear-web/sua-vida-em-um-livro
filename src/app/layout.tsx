import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sua Vida em um Livro™ | Transforme sua história em um livro",
  description:
    "Transformamos histórias reais, memórias e experiências em livros únicos para preservar sua vida, sua história e seu legado.",
  metadataBase: new URL("https://suavidaemumlivro.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sua Vida em um Livro™",
    description:
      "Transforme sua história, suas memórias e seu legado em um livro.",
    url: "https://suavidaemumlivro.com.br",
    siteName: "Sua Vida em um Livro™",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://suavidaemumlivro.com.br/images/opengraph-image.png",
        width: 1080,
        height: 1080,
        alt: "Sua Vida em um Livro™",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18406777513"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18406777513');

              // Função de rastreamento de conversão para cliques
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-18406777513/yCamCOftxuYcEKnFhMlE',
                    'value': 1.0,
                    'currency': 'BRL',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}