import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, dataLoaded } from './redux/tablesReducer.js';

import Header from './components/views/Header/Header.js';
import Footer from './components/views/Footer/Footer.js';
import Home from './components/pages/Home/Home.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import About from './components/pages/About/About.js';
import ItemPage from './components/pages/ItemPage/ItemPage.js';
import DeletePage from './components/pages/DeletePage/DeletePage.js';
import AddPage from './components/pages/AddPage/AddPage.js';
import { useEffect } from 'react';

function App() {

  const isLoaded = useSelector(dataLoaded);
  const dispatch = useDispatch();
  useEffect(()=> dispatch(fetchItems()), [dispatch]);

  return (
    <Container>
      <Header />
      { !isLoaded ? <div className="text-center"> <Spinner /> </div>:
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<ItemPage />} />
          <Route path="/table/add" element={<AddPage />} />
          <Route path="/table/delete/:id" element={<DeletePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
        <Footer />
    </Container>
  );
}

export default App;
