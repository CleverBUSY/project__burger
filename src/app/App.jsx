import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home/Home';
import Admin from '../page/Admin/Admin';
import Products from '../page/Products/Products';
import Contact from '../page/Contact/Contact';
import Category from '../components/Category/Category';
import Header from '../page/Header/Header';
import Footer from '../page/Footer/Footer';
import RegistrationModal from '../components/RegistrationModal/RegistrationModal'; // Подключите компонент модального окна регистрации
import IngredientProducts from '../page/IngredientProducts/IngredientProducts';

const App = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const handleContactClick = () => {
    setShowRegistrationModal(true);
  };

  const handleCloseModal = () => {
    setShowRegistrationModal(false);
  };

  return (
    <>
      <Header onContactClick={handleContactClick} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/products/:catalogId' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/category' element={<Category />} />
        <Route path='/ingredients' element={<IngredientProducts/>}/>
      </Routes>
      <Footer />
      {showRegistrationModal && <RegistrationModal onClose={handleCloseModal} />}
    </>
  );
};

export default App;
