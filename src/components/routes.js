import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import ContactUs from "./ContactUs/ContactUs";

const Routes = () => (
  <Switch>
  
    <Route path="/aboutus">
      <AboutUs />
    </Route>
    <Route path="/services">
      <Services />
    </Route>
    <Route path="/portfolio">
      <Portfolio />
    </Route>
    <Route path="contactus">
      <ContactUs />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
export default Routes;
