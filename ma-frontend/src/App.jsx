import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import StickyFooter from "./Components/StickyFooter/StickyFooter";
// import Games from "./Pages/Games/Games";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
// import Profile from "./Pages/Profile/Profile";
import SignUp from "./Pages/SignUp/SignUp";
// import Users from "./Pages/Users/Users";

function App() {
  	return (
		<>
		<NavBar />
		<BrowserRouter>
        	<Routes>
            	<Route exact path="/" element={<Home />} />
            	<Route path="/login/" element={<LogIn />} />
            	<Route path="/signup/" element={<SignUp />} />
            	{/* <Route path="/search/" element={<Users />} />
            	<Route path="/myprofile/" element={<Profile />} /> */}
        	</Routes>
		</BrowserRouter>
		<StickyFooter />
		</>
  	);
}

export default App;
