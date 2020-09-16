import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import inbox from "./mailfloders/inbox";
import spam from "./mailfloders/spam";
import deletefloder from "./mailfloders/delete";
import custom from './mailfloders/custom';
import maildashboard from './mailfloders/maildashboard'
import history from './history'

const App = () =>{
    return  <div>
                <BrowserRouter history={history}>
                    <div>
                        <Route path="/" exact component = {maildashboard} />
                        <Route path="/mailfloders/inbox" exact component = {inbox} />
                        <Route path="/mailfloders/spam" exact component = {spam} />
                        <Route path="/mailfloders/delete" exact component = {deletefloder} />
                        <Route path="/mailfloders/custom" exact component = {custom} />
                    </div>
                </BrowserRouter>
            </div>;
};

export default App;