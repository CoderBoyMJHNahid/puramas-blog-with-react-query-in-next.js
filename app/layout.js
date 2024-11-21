import localFont from "next/font/local";
import "./globals.css";
import "intl-tel-input/styles";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./service/Provider";

const montserratSans = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-montserrat-sans",
  weight: "100 900",
});
const montserratMono = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-montserrat-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pura+ | Ortopedia Fisioterapia Salud Belleza",
  description:
    "ortopedia cuidado pie rehabilitacion fitness medias varices salud belleza",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="es">
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.jpg"
          />
        </head>
        <body
          className={`${montserratSans.variable} ${montserratMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </Provider>
  );
}
