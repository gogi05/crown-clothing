import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Navigation from "./routes/Navigation";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
