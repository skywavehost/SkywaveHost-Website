import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Euphoria - Cross-border Payment Made Easy",
  description: "We help individuals and businesses pay and receive money globally at the best rates.",
  keywords: ["payment", "cross-border", "banking", "fintech", "money transfer", "currency exchange"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
