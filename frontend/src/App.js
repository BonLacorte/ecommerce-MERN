import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage, ProductDetailsPage, ProfilePage, CheckoutPage, ShopCreatePage, ShopLoginPage, SellerActivationPage } from './routes/Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
import Store from './redux/store';
import { loadSeller, loadUser } from './redux/actions/user';
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import ProtectedRoute from './routes/ProtectedRoute';
import { useSelector } from 'react-redux';
import { ShopHomePage } from "./ShopRoutes.js"
import SellerProtectedRoute from './routes/SellerProtectedRoute';
import { ShopDashboardPage, ShopCreateProduct, ShopAllProducts, ShopAllEvents, ShopCreateEvents, ShopAllCoupons, ShopPreviewPage } from './routes/ShopRoutes';


function App() {
  const { loading, isAuthentic } = useSelector((state) => state.user)

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
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
        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
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
        {/* <Route
          path="/settings"
          element={
            <SellerProtectedRoute>
              <ShopSettingsPage />
            </SellerProtectedRoute>
          }
        /> */}
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        {/* <Route
          path="/dashboard-orders"
          element={
            <SellerProtectedRoute>
              <ShopAllOrders />
            </SellerProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRoute>
              <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        /> */}
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />
        <Route
        path="/dashboard-create-event"
        element={
          <SellerProtectedRoute>
            <ShopCreateEvents />
          </SellerProtectedRoute>
        }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <ShopAllCoupons />
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
