import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import NavBar from "./Components/NavBar/NavBar";
import StickyFooter from "./Components/StickyFooter/StickyFooter";

import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Users from "./Pages/Users/Users";
import UserNotFound from "./Pages/Users/UserNotFound";

function App() {
  	return (
		<>
		<NavBar />
		<BrowserRouter>
        	<Routes>
            	<Route exact path="/" element={<Home />} />
            	<Route path="/login/" element={<LogIn />} />
            	<Route path="/signup/" element={<SignUp />} />
            	<Route path="/search/user" element={<Users />} />
            	<Route path="/search/usernotfound" element={<UserNotFound />} />
        	</Routes>
		</BrowserRouter>
		<StickyFooter />
		</>
  	);
}

export default App;
