import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Toaster } from "@/components/ui/toaster";
import "@mantine/core/styles.css";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shango App",
  description: "This is shango application.",
};

const theme = createTheme({
  primaryColor: "primary",
  colors: { 
    primary: [
      "#f1eeff",
      "#dfd9fa",
      "#bcb0ec",
      "#9885e0",
      "#7860d5",
      "#6449ce",
      "#5a3dcc",
      "#4a2fb5",
      "#4229a3",
      "#362191",
    ],
  },
  activeClassName: "",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${lexend.className}`}>
        <NextTopLoader color="#7860d5" height={3} showSpinner={false}  />
        <MantineProvider forceColorScheme="light" theme={theme}>
          {children}
        </MantineProvider>
        <Toaster />
      </body>
    </html>
  );
}
