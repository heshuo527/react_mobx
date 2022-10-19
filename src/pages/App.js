
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import PrivateRoute from '../component/PrivateRoute';
function App() {
  return (
    <Router>
       <PrivateRoute/>
    </Router>
  );
}

export default App;
