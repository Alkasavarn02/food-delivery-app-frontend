import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginRegistrationPage from "./Screens/LoginRegistrationPage";
import Homepage from "./Screens/HomePage/homepage";
import OrderingPage from "./Screens/OrderingPage";
import ProductPage from "./Screens/ProductPage";
import AppContextProvider from "./Context/appcontext";

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegistrationPage screen='login'/>}></Route>
          <Route path="/login" element={<LoginRegistrationPage screen='login'/>}></Route>
          <Route path="/register" element={<LoginRegistrationPage screen='register'/>}></Route>
          <Route path="/homepage" element={<Homepage screen="home"/>}></Route>
          <Route path="/productpage/:restaurant" element={<ProductPage screen="restaurant"/>}></Route>
          <Route path="/checkoutpage" element={<OrderingPage title="Checkout"/>}></Route>
          <Route path="/addresspage" element={<OrderingPage screen="addressPage" title="Your Order Details"/>}></Route>
          <Route path="/orderconfirmation" element={<OrderingPage screen="OrderConfirmation"/>}></Route>
          <Route path="/profilepage" element={<OrderingPage screen="profilepage" title="My Profile"/>}></Route>
          <Route path="/payment" element={<OrderingPage screen="payment" title="Choose and Pay"/>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App;
