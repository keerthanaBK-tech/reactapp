// import { Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>Welcome to our website!</p>
//       <button onClick={() => navigate('/about')}>About</button>
//       <button onClick={() => navigate('/services')}>Services</button>
//       <button onClick={() => navigate('/products')}>Products</button>
//       <button onClick={() => navigate('/contact')}>Contact</button>
//     </div>
//   );
// }

// function About() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>Learn more about our website.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/services')}>Services</button>
//       <button onClick={() => navigate('/products')}>Products</button>
//       <button onClick={() => navigate('/contact')}>Contact</button>
//     </div>
//   );
// }

// function Services() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Our Services</h1>
//       <p>We provide web development services.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/products')}>Products</button>
//     </div>
//   );
// }

// function Products() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Our Products</h1>
//       <p>Explore our latest products.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/contact')}>Contact</button>
//     </div>
//   );
// }

// function Contact() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>Email: info@example.com</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/about')}>About</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;





import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Project from './components/project';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;