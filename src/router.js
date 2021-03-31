import React from "react";
import {
  Switch,
  Route,} from "react-router-dom";

import HomePage from './components/HomePage'
import PrivacyPage from './components/PrivacyPage'
import TermsPage from './components/TermsPage'
import MainComponent from './MainComponent/main'
import Header from "./MainComponent/header";
import Footer from './MainComponent/footer'
import AppSupport from './components/AppSupport'

const Routes = ({ history }) => {
    return (
      // <Layout>
   
         <div>
             <Header/>
             <Switch>
                <Route
                path="/"
                exact
                component={HomePage}
                ></Route>
                <Route
                path="/privacy"
                exact
                // component={PrivacyPage}
                ><PrivacyPage/>
                </Route>
                <Route
                path="/terms"
                exact
                component={TermsPage}
                ></Route>
                <Route
                path="/support"
                exact
                component={AppSupport}
                ></Route>
            </Switch>
             <Footer/>
         </div>


    );
  };
  
  export default Routes;
   
