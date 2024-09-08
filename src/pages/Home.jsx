import How from "../components/How";
import About from "../components/About";
import Hero from "../components/Hero";
import Footer from "../components/Footer"


const Home = () => {
  return (
    <main className="bg-white h-screen">
      <section className="w-[100vw]  bg-white">
        
          <Hero />
          <How />
          <About />
          <Footer />
        
      </section>
    </main>
  );
};

export default Home;
