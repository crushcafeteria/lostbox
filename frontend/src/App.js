import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import ReportLostItem from './pages/ReportLostItem';
import LostItemDetails from "./pages/LostItemDetails";
import "bootstrap/dist/js/bootstrap.js";
import {library} from "@fortawesome/fontawesome-svg-core";
import './index.css';
import {
	faArrowLeft,
	faCheckCircle,
	faExclamationCircle,
	faFrown, faInfoCircle, faListUl, faMapMarker,
	faPlusCircle, faRefresh
} from "@fortawesome/free-solid-svg-icons";

// Fontawesome icons in use
library.add([faCheckCircle, faPlusCircle, faArrowLeft, faPlusCircle, faFrown,
	faExclamationCircle, faRefresh, faListUl, faInfoCircle, faMapMarker]);


function App() {
	return (
		<Router>
			<Navbar />
			<div className="container mt-5">

				{/* Only one route shows at a time */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/report-lost' element={<ReportLostItem />} />
					<Route path='/lost-item/:id' element={<LostItemDetails/>}/>
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
