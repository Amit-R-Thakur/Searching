import Dashboard from "./pages/Dashboard";
import "./App.css"
import AddCustomer from "./pages/AddCustomer";
import { BrowserRouter , Routes ,Route, Navigate} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/users"}/>}/>
        <Route path="/users" element={<Dashboard/>}/>
        <Route path="/add/customer" element={<AddCustomer/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
