import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Ac from "./pages/about/Ac";
import Ahome from "./components/Ahome";
import Allt from "./pages/travel/Allt";
import RSVPForm from "./pages/rsvp/RSVPForm";
import ScrollToTop from "./ScrollToTop";
import AdminApp from "./pages/rsvp/AdminApp";
import Nav from "./components/nav/Nav";
import Alts from "./pages/travel/Alts";

const Layout = () => {
  const location = useLocation();

  // hide navbar on rsvp and admin
  const hideNav =
    location.pathname === "/rsvp" || location.pathname === "/admin";

  return (
    <div>
      {!hideNav && <Nav />}
      <ScrollToTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Ahome />} />
        <Route path="/Wedding-details" element={<Ac />} />
        <Route path="/travel-stay" element={<Allt />} />
        <Route path="/rsvp" element={<RSVPForm />} />
        <Route path="/entertainment" element={<Alts />} />

        <Route path="/admin" element={<AdminApp />} />
      </Routes>

      {/* Footer */}
      <h1 className="footer_title">
        © 2025 David & Katy . All rights reserved.
      </h1>
    </div>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
