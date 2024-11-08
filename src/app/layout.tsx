import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/public/style/globals.css";
import ClientLayout from "./ClientLayout";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Amani - Contractor",
  description: "Amani - Contractor",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
