import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELEN MedTech | Early-stage endometriosis diagnostics",
  description:
    "ELEN MedTech is an Australian medical technology company developing a handheld non-invasive diagnostic platform aimed at earlier, less invasive detection of superficial peritoneal endometriosis."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

