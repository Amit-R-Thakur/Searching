import Dashboard from "./pages/Dashboard";
import "./App.css"
import AddCustomer from "./pages/AddCustomer";
import { BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/add/customer" element={<AddCustomer/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
