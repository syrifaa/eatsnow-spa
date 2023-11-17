import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from "./pages/Login";
import RestaurantList from './pages/RestaurantList';
import AddReview from "./pages/AddReview";
import RedeemVoucher from "./pages/RedeemVoucher";
import MyVoucher from "./pages/MyVoucher";
import MyReview from "./pages/MyReview";
import Logout from './pages/Logout';


const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif'
  },
  styles: {
    global: {
      // Set the background color of the body
      body: {
        bg: "#f5f5f5"
      },
    },
  },
});

const App = () => {
  return (
    // <Login />
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={
          localStorage.getItem("token") ? <RestaurantList /> : <Navigate to="/login" />
        } />

        <Route path="/login" element={
          localStorage.getItem("token") ? <Navigate to="/" /> : <Login />
        } />

        <Route path="/add-review/:resto_id/:resto_name" element={
          localStorage.getItem("token") ? <AddReview /> : <Navigate to="/login" />
        } />

        <Route path="/redeem-voucher" element={
          localStorage.getItem("token") ? <RedeemVoucher /> : <Navigate to="/login" />
        } />
        
        <Route path="/my-voucher" element={
          localStorage.getItem("token") ? <MyVoucher /> : <Navigate to="/login" />
        } />
        
        <Route path="/my-review" element={
          localStorage.getItem("token") ? <MyReview /> : <Navigate to="/login" />
        } />

        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={
          localStorage.getItem("token") ? <Navigate to="/" /> : <Navigate to="/login" />
        } />

        <Route path="/add-review/:resto_id/:resto_name" element={<AddReview />} />

      </Routes>
    </ChakraProvider>
  );
}

export default App;