import { Geist, Geist_Mono, Poppins, Roboto, Roboto_Condensed, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Restaurant",
    template: "%s | Restaurant",
  },
  description: "Bet fast food in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="px-5 flex items-center justify-between gap-5 bg-stone-700">
          <Link href={"/"}>
            {/* <img src="/logo.png" alt="" className="w-[120px] " /> */}
            <Image
              width={120}
              height={30}
              src="/logo.png"
              alt=""
              className=""></Image>
          </Link>

          <div className="space-x-5">
            <Link prefetch={false} className="btn" href={"/foods"}>
              Foods
            </Link>
            <Link className="btn" href="/reviews">
              Reviews
            </Link>
            <Link className="btn" href="/feedback">
              Feedbacks
            </Link>
          </div>
        </header>

        <main className="px-5 py-8">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
