import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage } from './routes/Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';


function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
    // Store.dispatch(loadSeller());
    // Store.dispatch(getAllProducts());
    // Store.dispatch(getAllEvents());
    // getStripeApikey();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>
        <Route path='/activation/:activation_token' element={<ActivationPage/>}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/best-selling' element={<BestSellingPage />}/>
        <Route path='/events' element={<EventsPage />}/>
        <Route path='/faq' element={<FAQPage />}/>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
    
  );
}

export default App;
