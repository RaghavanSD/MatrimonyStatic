import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./Component/FirstPage/FirstPage";
import Home from "./Component/Home/Home";
import Register from "./Component/Register/Register";
import Profile from "./Component/Profile/Profile";
import Newmatches from "./Component/NewMatches/NewMatches";
import Search from "./Component/Search/Search";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<FirstPage />} />
					<Route path="/register" element={<Register />} exact />
					<Route path="/home" element={<Home />} exact />
					<Route path="/profile" element={<Profile />} exact />
					<Route path="/newmatches" element={<Newmatches />} exact />
					<Route path="/search" element={<Search />} exact />
					{/* <Route path="expenses" element={<Expnses />} />
				<Route path="invoices" element={<Invoices />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
