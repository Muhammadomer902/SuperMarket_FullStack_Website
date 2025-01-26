import Notification from "@/components/Notification";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperMarket",
  description: "EveryThing At Your Door",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <QueryProvider>
            <div>
              <Notification/>
              <NavBar/>
              {children}
              <Footer/>
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
