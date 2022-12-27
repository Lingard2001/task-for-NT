import {  Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Loader from './shared/loading/Loader';
import "./App.css"
import Login from './Auth/Login';
const App = () => {



  return (
    <Suspense fallback={<Loader />}>
      <div className={`App `}>
        <Router>
       
       
            <Route path={`/`} >
             <Login />
            </Route>

        </Router>
      </div>
    </Suspense>

  );
}

export default App;