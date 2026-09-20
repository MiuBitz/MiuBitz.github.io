import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedTools from "@/components/FeaturedTools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <FeaturedTools />
      </main>
      <Footer />
    </div>
  );
}
