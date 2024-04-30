import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Politics from "./component/Politics";
import Entertainment from "./component/Entertainment";
import Sports from "./component/Sports";
import Economy from "./component/Economy";
import Bussiness from "./component/Bussiness";
import World from "./component/World";
import Weather from "./component/Weather";
import Footer from "./component/Footer";
import Articles from "./component/Articles";
import Search from "./component/Search";
import Login from "./component/Login";
import Register from "./component/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { store } from "./store";
import { RefreshAccessToken, UserAccess } from "./api/auth/Loginslice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { Authtoken } = useSelector(UserAccess);
  useEffect(() => {
    const interval = setInterval(() => {
      if (Authtoken) {
        store.dispatch(RefreshAccessToken(Authtoken.refresh));
        console.log("refreshing token");
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [Authtoken]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politics">
            <Route index element={<Politics />} />
            <Route path=":title" element={<Articles />} />
          </Route>
          <Route path="/entertainment">
            <Route index element={<Entertainment />} />
            <Route path=":title" element={<Articles />} />
          </Route>
          <Route path="/sports">
            <Route index element={<Sports />} />
            <Route path=":title" element={<Articles />} />
          </Route>
          <Route path="/economy">
            <Route index element={<Economy />} />
            <Route path=":title" element={<Articles />} />
          </Route>
          <Route path="/bussiness">
            <Route index element={<Bussiness />} />
            <Route path=":title" element={<Articles />} />
          </Route>
          <Route path="/world">
            <Route index element={<World />} />
            <Route path=":title" element={<Articles />} />
          </Route>
          <Route path="/weather">
            <Route index element={<Weather />} />
            <Route path=":title" element={<Articles />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
