import Home from "./pages/Home.jsx";
import SingleNews from "./pages/SingleNews.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/Privateroute.jsx";
import CreateNewsListing from "./pages/CreateNewsListing.jsx";
import NewsListing from "./pages/NewsList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<SingleNews />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/news-listing/:listingId' element={<NewsListing />} />

        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/create-news" element={<CreateNewsListing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
