import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './Signin';
import SignUp from './Signup';
import { AuthContext } from './contexts/Auth';
import '../style.scss'

function App () {
  
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
      <div>
        <Router>
        <AuthContext.Provider value={providerUser}>
          <Switch>
            <Route component={SignIn} exact path="/"/>
            <Route component={SignUp} exact path="/signup"/>
          </Switch>
        </AuthContext.Provider>
      </Router>
      </div>
    )
};

export default App;