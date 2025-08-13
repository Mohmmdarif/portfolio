import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mohammad Arif Fadhilah - Portfolio",
  description: "A portfolio showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="description" content="M. Arif Fadhilah Portfolio" />
        <meta name="author" content="M. Arif Fadhilah" />
        <meta name="keywords" content="M. Arif Fadhilah, Portfolio, Web Developer, Frontend Developer, Backend Developer" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
