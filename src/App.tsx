import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;