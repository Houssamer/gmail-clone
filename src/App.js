import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import EmailList from './Components/Emails/EmailList';
import NewMail from './Components/Emails/NewMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
import Mail from './Components/Emails/Mail';
import { auth } from './firebase';
import { login, selectUser } from './features/userSlice';
import Login from './Login';

function App() {
  
  const openMail = useSelector(selectOpenMail);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
          dispatch(login({
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoUrl: userAuth.photoURL
          }))
        }
    })
  }, [dispatch])

  return (
    <div className="App">
      {!user ? <Login /> : (
        <>
          <Header />
          <div className="app__content">
            <SideBar />
            <Router>
              <Switch>
                <Route path='/mail'>
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </Router>
           </div>
          {openMail && <NewMail />}
        </>
      ) }
    </div>
  );
}

export default App;
