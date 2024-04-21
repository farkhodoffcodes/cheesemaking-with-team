import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./components/Categories";
import Receipts from "./components/Receipts";
import Delivery from "./components/Delivery/Delivery";
import AnsAndQuest from "./components/AnsAndQuest/AnsAndQuest";
import Reviews from "./components/Reviews";
import ReceiptDetails from "./components/ReceiptDetails";
import Calculator from "./components/Calculator/Calculator";
import NotFound from "./components/NotFound/NotFound";
import Yeast from "./components/Yeast";
import Profile from "./components/Profile";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/yeast" element={<Yeast/>} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/ansandquest" element={<AnsAndQuest/>} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/receiptdetails" element={<ReceiptDetails/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
