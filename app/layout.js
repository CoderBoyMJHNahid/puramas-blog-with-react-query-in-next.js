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

// export const metadata = {
//   title: "Pura+ | Ortopedia Fisioterapia Salud Belleza",
//   description:
//     "ortopedia cuidado pie rehabilitacion fitness medias varices salud belleza",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };
export async function generateMetadata() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POST_URL}/api/details/meta/${process.env.NEXT_PUBLIC_SITE_ID}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();

    const faviconAddress = data?.site_logo
      ? `${process.env.NEXT_PUBLIC_CMS_URL}api/uploads/${data.site_logo}`
      : "/favicon.ico";

    console.log("🚀 ~ generateMetadata ~ faviconAddress:", faviconAddress);

    return {
      title: data?.site_title || "Pura+ | Ortopedia Fisioterapia Salud Belleza",
      description:
        data?.site_desc ||
        "ortopedia cuidado pie rehabilitacion fitness medias varices salud belleza",
      icons: {
        icon: faviconAddress,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error.message);
    return {
      title: "Pura+ | Ortopedia Fisioterapia Salud Belleza",
      description: "Error fetching metadata.",
      icons: {
        icon: "/favicon.ico",
      },
    };
  }
}

export default function RootLayout({ children }) {
  return (
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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
