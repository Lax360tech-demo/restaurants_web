import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0503",
};

export const metadata: Metadata = {
  title: "Lax360 | Haute Cuisine Indienne & Royal Dining",
  description: "Cinematic premium Indian dining experience by Lax360.",
  keywords: [
    "Lax360",
    "Spice Royale",
    "Indian Restaurant",
    "Biryani",
    "Luxury Dining",
    "Tandoori",
    "Butter Chicken",
    "Fine Dining",
  ],
  authors: [{ name: "Spice Royale" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} scroll-smooth dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('spice-royale-theme');
                  var theme = saved || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#FAF5EC] text-[#23120B] dark:bg-black dark:text-white overflow-x-hidden font-sans antialiased selection:bg-orange-600 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
