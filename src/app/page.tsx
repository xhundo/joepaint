import Header from "./ui/Header/Header";
import Hero from "./ui/Hero/Hero";
import Project from "./ui/Projects/Project";
import Services from "./ui/Services/Services";
import Reviews from "./ui/Reviews/Review";
import Consultations from "./ui/Consultations/Consultations";
import Footer from "./ui/Footer/Footer";

export default function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Project />
      <Services />
      <Reviews />
      <Consultations />
      <Footer />
    </main>
  );
}
