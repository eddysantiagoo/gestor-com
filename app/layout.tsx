import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
