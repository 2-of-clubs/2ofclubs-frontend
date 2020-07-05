import React from 'react';
import {LandingPage} from "./containers/LandingPage";
import {Route, Switch} from "react-router-dom";
import Login from "./containers/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./containers/Signup";
import {Provider, useStore} from "react-redux";
import store from "./store/store"
import Home from "./containers/Home";
import Explore from "./containers/Explore";

/*
Notes: Conditional rendering for the "/" route
When the user is logged in, it should automatically bring them to the main page rather than the landing one
 */

function App() {
    const state = store.getState()

    return (
        <div className="App">
            <Provider store={store}>
                <Switch>
                    <Route exact path={"/"} render={() => (
                        false ? <Home/> : <LandingPage/>
                    )}/>
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/signup"} component={SignUp}/>
                    <Route exact path={"/explore"} component={Explore}/>
                </Switch>
            </Provider>
        </div>
    );
}

export default App;
