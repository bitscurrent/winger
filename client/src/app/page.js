import Image from "next/image";
import styles from "./page.module.css";
import Contact from "../pages/contact";
import Footer from "../pages/footer";
import Header from "../pages/header";
import HomeComponent from "../pages/home";

export default function Home() {
  return (
    <main>
     <Header />
      <Contact />
<HomeComponent />
      <Footer />
    </main>
  
  );
}
