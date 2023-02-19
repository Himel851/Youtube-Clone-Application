import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
