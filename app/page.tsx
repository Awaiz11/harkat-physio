import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Conditions from "@/components/Conditions";
import Steps from "@/components/Steps";
import HomeVisits from "@/components/HomeVisits";
import Fees from "@/components/Fees";
import Book from "@/components/Book";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Conditions />
        <Steps />
        <HomeVisits />
        <Fees />
        <Book />
      </main>
      <Footer />
    </>
  );
}
