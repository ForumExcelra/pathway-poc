import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Initialize Stencil components
// defineCustomElements(window);

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script
          type="module"
          src="@merckgroup/chemuix/dist/chemuix/chemuix.esm.js"
        ></script>
        <script
          nomodule
          src="@merckgroup/chemuix/dist/chemuix/chemuix.js"
        ></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
