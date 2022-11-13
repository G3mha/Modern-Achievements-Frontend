import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
// import SignUp from "./Pages/SignUp";
// import Search from "./Pages/Search";
// import Profile from "./Pages/Profile";

function App() {
  	return (
		<BrowserRouter>
        	<Routes>
            	<Route exact path="/" element={<Home />} />
            	<Route path="/login" element={<LogIn />} />
            	{/* <Route path="/signup" element={SignUp} />
            	<Route path="/search" element={Search} />
            	<Route path="/profile" element={Profile} /> */}
        	</Routes>
  		</BrowserRouter>
  	);
}

export default App;
