import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddRoom from './components/AddRoom';
import Rooms from './components/Rooms';
import { BsFillHouseDoorFill,BsFillStarFill,BsAlarmFill,BsCalendarFill } 
  from "react-icons/bs";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="Menu">
          <ul>
              <li><Link to="/"><span className = "MenuText"><BsFillHouseDoorFill />TRANG CHỦ</span></Link></li>
              <li><Link to="/addproduct"><span className = "MenuText"><BsFillStarFill/>MỨC GIÁ</span></Link></li>
              <li><Link to="/cart"><span className = "MenuText"><BsAlarmFill/>ĐẶT PHÒNG</span></Link></li>
              <li><Link to="/payment"><span className = "MenuText"><BsCalendarFill/>HÌNH ẢNH</span></Link></li>
              <li><Link to="/addroom"><span className = "MenuText">Add Room</span></Link></li>
          </ul>
        </div>
        <switch>
          <Route path="/" exact>
              <Rooms />
          </Route>
          <Route path="/addroom">
              <AddRoom/>
          </Route>
        </switch>
      </Router>
    );
  }
}

export default App;


