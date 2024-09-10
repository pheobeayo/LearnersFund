import How from "../components/How";
import About from "../components/About";
import Hero from "../components/Hero";
import Proposal from "../components/Proposal";
import Footer from "../components/Footer"


const Home = () => {
  return (
    <main className="bg-white h-screen">
      <section className="w-[100vw]  bg-white">
        
          <Hero />
          <How />
          <Proposal />
          <About />
          <Footer />
        
      </section>
    </main>
  );
};

export default Home;
