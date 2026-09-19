import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </>
  );
}

export default App;