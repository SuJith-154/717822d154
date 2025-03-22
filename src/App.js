import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopUsers from "./pages/topusers";
import TrendingPosts from "./pages/trendingpost";
import Feed from "./pages/Feed";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<TopUsers />} />
                <Route path="/trending" element={<TrendingPosts />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    );
}

export default App;

