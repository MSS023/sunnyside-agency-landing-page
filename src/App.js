import './App.css';
import Header from './Header.js';
import Services from "./Services.js";
import Testimonials from "./Testimonials.js";
import Gallery from "./Gallery.js";
import Links from "./Links.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Testimonials />
      <Gallery />
      <Links />
    </div>
  );
}

export default App;
