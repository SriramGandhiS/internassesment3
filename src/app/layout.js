import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
  description:
    "Cultivate high-performance teams through expert learning. Tailored corporate training solutions with 10K+ professionals trained, 200+ sessions delivered.",
  keywords:
    "corporate training, enterprise learning, professional development, skill development, Accredian",
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
    description:
      "Cultivate high-performance teams through expert learning with Accredian Enterprise.",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
