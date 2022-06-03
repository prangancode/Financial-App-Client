import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MainAdminDashboard from './Pages/Dashboard/Dashboard/MainAdminDashboard';
import ContentCA from './Pages/Dashboard/DashboardHome/ContentCA';
// import ContactUs from './Pages/ContactUs/ContactUs';
// import Home from './Pages/Home/Home/Home';
import LoginForm from './Pages/Login/LoginForm/LoginForm';
import RegisterForm from './Pages/Login/RegisterForm/RegisterForm';
import ClientAgreement from './Pages/Policies/ClientAgreement/ClientAgreement';
import PrivacyPolicy from './Pages/Policies/PrivacyPolicy/PrivacyPolicy';
import TermsandConditions from './Pages/Policies/TermsandConditions/TermsandConditions';
import ReviewForm from './Pages/Review/ReviewForm';
import ServiceDetailsList from './Pages/ServiceDetailsList/ServiceDetailsList/ServiceDetailsList';
import PreLoader from './Pages/Shared/PreLoader/PreLoader';
import StartFromTop from './Pages/Shared/StartFromTop/StartFromTop';
import Testimonial from './Pages/Testimonial/Testimonial';
import Webviewer from './Pages/Webviewer/Webviewer';
const LazyContactUs = React.lazy(() => import('./Pages/ContactUs/ContactUs'));
const LazyHome = React.lazy(() => import('./Pages/Home/Home/Home'));



function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <StartFromTop />
          <Switch>
            <Route exact path="/">
              <React.Suspense fallback={<PreLoader />}>
                <LazyHome />
              </React.Suspense>
              {/* <Home /> */}
            </Route>
            <Route path="/home">
              <React.Suspense fallback={<PreLoader />}>
                <LazyHome />
              </React.Suspense>
              {/* <Home /> */}
            </Route>

            <Route path="/allservices">
              <ServiceDetailsList />
            </Route>
            <Route path="/contactus">
              <React.Suspense fallback='Loading..'>
                <LazyContactUs />
              </React.Suspense>
              {/* <ContactUs /> */}
            </Route>

            <Route path="/testimonial">
              <Testimonial />
            </Route>
            <Route path="/reviewform">
              <ReviewForm />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/terms-conditions">
              <TermsandConditions />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/admindashboard">
              <MainAdminDashboard />
            </Route>
            <Route path="/pdf">
              <Webviewer />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;