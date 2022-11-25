import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import StickyFooter from "./Components/StickyFooter/StickyFooter";

import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import React, { useState } from 'react';
import SignUp from "./Pages/SignUp/SignUp";
import Users from "./Pages/Users/Users";
import UserNotFound from "./Pages/Users/UserNotFound";
import SignUpSuccess from "./Pages/SignUp/SignUpSuccess";

function getLogged() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    try {
        if (userToken.token) {
            return true;
        }
    }
    catch (e) {
        return false;
    }
}
function App() {
	const isLogged = getLogged();
  	return (
		<>
			<NavBar loggedIn={isLogged} />
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/login/" element={<LogIn />} />
					<Route path="/signup/" element={<SignUp />} />
					<Route path="/search/user" element={<Users />} />
					<Route path="/search/usernotfound" element={<UserNotFound />} />
					<Route path="/accounts/login/success" element={<SignUpSuccess />} />
				</Routes>
			</BrowserRouter>
			<StickyFooter />
		</>
  	);
}

export default App;
