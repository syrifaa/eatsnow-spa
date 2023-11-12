import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Login from "./pages/Login";
import RestaurantList from './pages/RestaurantList';
import AddReview from "./pages/AddReview";
import RedeemVoucher from "./pages/RedeemVoucher";
import MyVoucher from "./pages/MyVoucher";

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif', // Use Poppins as the default font
  },
  styles: {
    global: {
      // Set the background color of the body
      body: {
        bg: "#f5f5f5", // Replace with your desired background color
      },
    },
  },
});

const App = () => {
  return (
    // <Login />
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RestaurantList />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/redeem-voucher" element={<RedeemVoucher />} />
        <Route path="/my-voucher" element={<MyVoucher />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;