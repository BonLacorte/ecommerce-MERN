import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage, ProductDetailsPage, ProfilePage, CheckoutPage, ShopCreatePage, ShopLoginPage, SellerActivationPage } from './routes/Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import Store from './redux/store';
import { loadSeller, loadUser } from './redux/actions/user';
import ProtectedRoute from './routes/ProtectedRoute';
import { useSelector } from 'react-redux';
import { ShopHomePage } from "./ShopRoutes.js"
import SellerProtectedRoute from './routes/SellerProtectedRoute';


function App() {
  const { loading, isAuthentic } = useSelector((state) => state.user)

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
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
        <Route path='/product/:name' element={<ProductDetailsPage />}/>
        <Route path='/best-selling' element={<BestSellingPage />}/>
        <Route path='/events' element={<EventsPage />}/>
        <Route path='/faq' element={<FAQPage />}/>
        <Route path='/checkout' element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }/>
        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }/>
        {/* shop Routes */}
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path='/seller/activation/:activation_token' element={<SellerActivationPage/>}/>
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
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
