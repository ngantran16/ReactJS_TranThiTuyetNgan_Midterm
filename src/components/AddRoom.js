import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rooms.css';

class AddRoom extends Component {
    constructor(props){
        super(props);
        this.rooms = JSON.parse(localStorage.getItem("romms")); 
        this.state = {
            rooms: this.rooms,
            selectedValue: 'Sun flower',
        }
        this.onSubmitAdd = this.onSubmitAdd.bind(this);
    }

    onSubmitAdd(event) {
        event.preventDefault();
        let name = event.target['name'].value;
        let typeroom = event.target['typeroom'].value;
        let number = event.target['number'].value;
        let area  = event.target['area'].value;
        let price = event.target['price'].value;
        let oldprice = event.target['oldprice'].value;
        let image = event.target['photo'].files.item(0).name;

        let rooms  = JSON.parse(localStorage.getItem("rooms"));
        let id = localStorage.getItem("id_room");
        if (!id){
            id = 0;
        }
        if (!rooms) {
            rooms = [];
        }
        let room = {
            id: id++,
            name: name,
            image: image,
            typeroom: typeroom,
            number : number,
            area: area,
            price: price,
            oldprice: oldprice,
        }
        
        rooms.push(room);
        localStorage.setItem("rooms", JSON.stringify(rooms));
        localStorage.setItem("id_room",id++);
        this.setState({
            rooms:rooms
        })
        alert("Add successfully!");
    }
    render(){
        return (
            <div className="container">
                <div className="FormAdd">
                    <h1>Add a new room</h1>
                    <form onSubmit={ this.onSubmitAdd }>
                        Name: <input type="text" name="name" className="form-control"/>
                        <br></br>
                        Type Room: <input type="text" name="typeroom" className="form-control" />
                        <br></br>
                        Number: <input type="text" name="number" className="form-control" />
                        <br></br>
                        Area: <input type="text" name="area" className="form-control" />
                        <br></br>
                        Price: <input type="text" name="price" className="form-control" />
                        <br></br>
                        Old Price: <input type="text" name="oldprice" className="form-control" />
                        <br></br>
                        Image: <input type="file" name="photo" placeholder="Choose a image" className="form-control"/>
                        <br></br>
                       <button className="btn btn-primary">Add</button>
                    </form>
                </div>
                <br></br>
            </div>
        )
    }  
}
export default AddRoom;