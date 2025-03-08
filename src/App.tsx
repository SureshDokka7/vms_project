import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { VolunteerRegistration } from "./components/Registration/VolunteerRegistration";
import RegistrationTabs from "./components/Registration/RegistrationTabs";
import { Sidenavbar } from "./components/Sidenavbar";

export const App = () => {
  return (
    <>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidenavbar />
          <div style={{ marginLeft: "200px" }}>
            <Routes>
              <Route path="/registration" element={<VolunteerRegistration />} />
              <Route path="/tab" element={<RegistrationTabs />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};
