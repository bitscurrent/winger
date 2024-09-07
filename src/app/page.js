import Image from "next/image";
import styles from "./page.module.css";
import Contact from "../pages/contact";
import Footer from "../pages/footer";
import Header from "../pages/header";
import HomeComponent from "../pages/home";
import HeroSection from "../pages/hero";
import SeatReservation from "../pages/seatReservation";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "../pages/login";
import BusSeatingLayout from "../pages/busLayout";
import Service from "../pages/service";


export default function Home() {
  return (
    <>

     <Header />
    <HeroSection />
    <SeatReservation />
    <Service />
<Contact />
<Footer />

    </>
  );
}
