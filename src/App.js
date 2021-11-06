import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Appoinment from './Components/Appoinment/Appoinment';
import Contact from './Components/Contact/Contact';
import Department from './Components/Department/Department';
import Doctor from './Components/Doctor/Doctor';
import Doctors from './Components/Doctors/Doctors';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Service from './Components/Service/Service';
import Signup from './Components/Signup/Signup';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/service/:id">
            <Service></Service>
          </PrivateRoute>
          <Route exact path="/department">
            <Department></Department>
          </Route>
          <Route exact path="/doctors">
            <Doctors></Doctors>
          </Route>
          <PrivateRoute exact path="/doctor/:id">
            <Doctor></Doctor>
          </PrivateRoute>
          <PrivateRoute exact path="/appoinment">
            <Appoinment></Appoinment>
          </PrivateRoute>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route pathe="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
