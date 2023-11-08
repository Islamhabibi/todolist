import logo from './logo.svg';
import './App.css';
import Todolist from './Compoment/Todolist';
import AddTask from './Compoment/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
       <Todolist/>
       <AddTask/>
    </div>
  );
}

export default App;
