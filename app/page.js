import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Promo from "./components/Promo";
import Slider from "./components/Slider";
import CountWrapper from "./components/CountWrapper";
import Catalog from "./components/Catalog";
import Posts from "./components/Posts";
import PlaceLoc from "./components/PlaceLoc";
import GroupWrapper from "./components/GroupWrapper";
import FormWrapper from "./components/FormWrapper";
import Footer from "./components/Footer";
import ContactOut from "./components/ContactOut";
import { ToastContainer } from "react-toastify";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <Promo />
        <Slider />
        <CountWrapper />
        <Posts />
        <Catalog />
        <PlaceLoc />
        <GroupWrapper />
        <FormWrapper />
        <Footer />
        <ContactOut />
        <ToastContainer />
      </main>
    </>
  );
}
