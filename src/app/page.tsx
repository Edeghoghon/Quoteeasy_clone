import Categories from "../components/Categories";
import Footer2 from "../components/Layout/Footer2";
import Getquote from "../components/Getquote";
import Hero from "../components/Hero";
import HowitWorks from "../components/HowitWorks";
import Navbar from "../components/Layout/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Getquote />
      <Categories />
      <HowitWorks />
      <Footer2 />
    </div>
  );
}
