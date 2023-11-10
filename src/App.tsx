import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";

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
        <Route path="/" element={<Login />} />
      </Routes>
    </ChakraProvider>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}

export default App;