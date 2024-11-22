"use client"
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
import { useEffect, useState } from "react";
import LoadingImage from "./components/LoadingImage";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return <LoadingImage />
  }

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
