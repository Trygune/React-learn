import React, { useMemo, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Products from './Products.json';
import Product from '../Products/products';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import ThemeContext from '../../Contexts/Themecontext';
import themeconfig from '../../Configs/theme';
import Singleproducts from '../Singleproduct/Singleproducts';

function App() {
  const [activetheme, setactivetheme] = useState('green');
  const contectvalue = useMemo(() => ({
    theme: themeconfig[activetheme],
    setactivetheme,
  }), [activetheme]);
  return (
    <ThemeContext.Provider value={contectvalue}>
      <div className="App">
        <BrowserRouter basename="/React-learn">
          <Layout>
            <Routes>
              <Route
                path="/"
                element={(
                  <Product
                    info={Products}
                  />
              )}
              />
              <Route
                path="/about"
                element={(
                  <About />
              )}
              />
              <Route
                path="/contact"
                element={(
                  <Contact />
              )}
              />
              <Route
                path="/Blog"
                element={(
                  <Blog />
              )}
              />
              <Route
                path="/product/:id"
                element={(
                  <Singleproducts />
              )}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
