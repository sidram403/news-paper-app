import Home from "./pages/Home.jsx";
import SingleNews from "./pages/SingleNews.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/Privateroute.jsx";
import CreateNewsListing from "./pages/CreateNewsListing.jsx";
import NewsListing from "./pages/NewsList.jsx";
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import UserDashboard from "./pages/user/Dashboard.jsx";
import { useSelector } from "react-redux";
import ShowListing from "./pages/ShowListing.jsx";
// import { LanguageProvider } from "./context/languageContext.js";
import LanguageSelector from "./components/LanguageSelector.jsx";
// import ProfileSection from "./pages/ProfileDemo.jsx";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
      <BrowserRouter>
        <LanguageSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<SingleNews />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/news-listing/:listingId" element={<NewsListing />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            {currentUser && currentUser.role === "admin" && (
              <Route path="/dashboard" element={<AdminDashboard />} />
            )}
            {currentUser && currentUser.role === "user" && (
              <Route path="/dashboard" element={<UserDashboard />} />
            )}

            <Route path="/create-news" element={<CreateNewsListing />} />
            <Route path="/news-list" element={<ShowListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
