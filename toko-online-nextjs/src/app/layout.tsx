import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toko Online cipa",
  description: "Belanja mudah dan aman di Toko Online."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
