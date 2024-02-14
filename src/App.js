import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'

import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
import Home from './components/pages/Home/Home.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import About from './components/pages/About/About.js';
import ItemPage from './components/pages/ItemPage/ItemPage.js';
import EditPage from './components/pages/EditPage/EditPage.js';
import AddPage from './components/pages/AddPage/AddPage.js';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<ItemPage />} />
          <Route path="/table/add" element={<AddPage />} />
          <Route path="/table/edit/:id" element={<EditPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </Container>
  );
}

export default App;
