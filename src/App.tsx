import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import WhatsAppButton from '@components/WhatsAppButton';
import '@styles/global.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
