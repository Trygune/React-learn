import React ,{useState} from 'react';
import './App.css';
import Products from './Products.json'
import Product from './../Products/products';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import ThemeContext from '../../Contexts/Themecontext';
import themeconfig from "../../Configs/theme";
import Singleproducts from '../Singleproduct/Singleproducts';
import{
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [activetheme,setactivetheme] = useState('green')
  return (
    <ThemeContext.Provider value={
        {
          theme: themeconfig[activetheme],
          setactivetheme
        }
      }>
      <div className='App'>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={
                <>
                    <Product 
                    info={Products}
                  />
                </>
              } />
              <Route path='/about' element={
                <>
                    <About/>
                </>
              }/> 
              <Route path='/contact' element={
                <>
                    <Contact/>
                </>
              }/> 
              <Route path='/Blog' element={
                <>
                    <Blog/>
                </>
              }/> 
              <Route path='/product/:id' element={
                <>
                    <Singleproducts/>
                </>
              }/> 
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
