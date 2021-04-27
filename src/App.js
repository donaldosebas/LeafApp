import React, { useState, createContext } from "react";
import Main from "./views/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/login";
import Profile from "./views/profile";
import SignUp from "./views/signup";
import Search from "./views/search";
import Premium from "./views/premium";
import ModifySongs from "./views/modifySongs";
import ModifySongDetails from "./views/modifySongDetails";
import PlaylistForm from "./components/PlaylistForm";
import AlbumForm from "./components/AlbumForm";
import Item from './views/item'
import ReportData from './views/dataReport'
import DataReportItem from "./views/dataReportItem";
import MonitorUpdate from './views/monitorUpdate' 
import MonitorOption1 from "./views/monitorOption1";
import UserMonitor from "./views/userMonitor";
import MonitorOption2 from "./views/monitorOption2";
import MonitorOption2Modify from "./views/monitorOption2Modify";

export const UserContext = createContext();
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const user_id = localStorage.getItem('user_id')
  return (
    <UserContext.Provider value={{ token, setToken: setToken, user_id }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/premium">
            <Premium />
          </Route>
          <Route exact path="/playlists">
            <PlaylistForm />
          </Route>
          <Route exact path="/albums">
            <AlbumForm />
          </Route>
          <Route exact path="/modifySongs">
            <ModifySongs />
          </Route>
          <Route exact path="/modifySongs/modify">
            <ModifySongDetails />
          </Route>
          <Route exact path='/modifySongs/modify/item'>
            <Item />
          </Route>
          <Route exact path='/dataReport'>
            <ReportData />
          </Route>
          <Route exact path='/dataReport/reportItem'>
            <DataReportItem />
          </Route>
          <Route exact path='/monitorUpdate'>
            <MonitorUpdate />
          </Route>
          <Route exact path='/userMonitor'>
            <UserMonitor />
          </Route>
          <Route exact path='/monitorOption1'>
            <MonitorOption1 />
          </Route>
          <Route exact path='/monitorOption2'>
            <MonitorOption2 />
          </Route>
          <Route exact path='/monitorOption2/modify'>
            <MonitorOption2Modify />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
export default App;
