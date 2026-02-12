import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Gestor de Partes",
  description: "Tu aliado estratégico en refacciones automotrices y equipo especializado.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!['es', 'en', 'zh'].includes(locale)) {
    notFound();
  }

  // Receiving messages provided in `i18n/request.ts`
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[120px] md:pt-[130px]">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
