import "./globals.css";

import Footer from "@sections/Footer";
import { ThemeProvider } from "@components/theme-provider";
import { constructMetadata } from "@lib/utils";
import { raleway } from "@utils/fonts";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-8">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
