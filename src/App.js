
import './App.css';
import Login from './Auth/Login';
import {Router,Route,Routes} from 'react-router-dom'
import Task from './pages/Task';
 

function App() {
  return (
    <Router>
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/tasks' element={<Task />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
