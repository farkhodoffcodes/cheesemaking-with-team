import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./components/Categories";
import Kзакваски from "./components/Kзакваски";
import Receipts from "./components/Receipts";
import Delivery from "./components/Delivery/Delivery";
import AnsAndQuest from "./components/AnsAndQuest/AnsAndQuest";
import Reviews from "./components/Reviews";
import ReceiptDetails from "./components/ReceiptDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/k-закваски" element={<Kзакваски/>} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/ansandquest" element={<AnsAndQuest/>} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/receiptdetails" element={<ReceiptDetails/>}/>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
