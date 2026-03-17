import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";
import Tag from "@/tag/Tag";



export const metadata: Metadata = {
  title: 'BL BENZ - Location de voitures de luxe à Agadir',
  description: 'Louez votre voiture de luxe à Agadir en toute simplicité. Service 24/7, livraison aéroport, voitures propres et assurées. Réservez maintenant!',
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        <Tag />
</body>
      </ServiceWrapper>
    </html>
  );
}
