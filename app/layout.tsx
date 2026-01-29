import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import BgComponent from "./components/BgComponent";

export const metadata: Metadata = {
  title: "GeezCode Solutions",
  description:
    "Empowering your digital journey with cutting-edge tech and elegant solutions.",
  icons: {
    icon: "/black.png",
    shortcut: "/black.png",
    apple: "/black.png",
    // other: {
    //   rel: "apple-touch-icon-precomposed",
    //   url: "/apple-touch-icon-precomposed.png",
    // },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<body
        className={`${inter.className} flex flex-col min-h-screen bg-linear-to-br from-blue-950 to-amber-400`} // Added flex utility classes
      >*/}
      <body
        className="flex flex-col min-h-screen bg-linear-to-b from-slate-950 via-blue-950 to-blue-900" // Added flex utility classes
      >
        <div className="absolute top-50 left-10 w-96 h-96 bg-amber-800/50 rounded-full blur-[150px] bg-scroll" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-800/30 rounded-full blur-[150px]" />
        {/* BgComponent as background */}

        <Header />
        <main className="flex-grow pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
