import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import SpecialDishes from '@/components/home/SpecialDishes';
import Chef from '@/components/home/Chef';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SpecialDishes />
        <Chef />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
