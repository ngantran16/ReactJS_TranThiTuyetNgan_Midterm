import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomItem from './RoomItem';
import './Rooms.css';
class Rooms extends Component{
    constructor(){
        super();
        let rooms = JSON.parse(localStorage.getItem("rooms")); 
        if (!rooms){
            rooms = [
                {
                  id : 1,
                  name: '2 giường đôi lớn',
                  image: 'image2.jpg',
                  typeroom: 'Phòng Family',
                  number: '4 người lớn',
                  area: '45m2',
                  price: 200000000,
                  oldprice: 300000000000
                },
                {
                  id : 2,
                  name: '2 giường đôi lớn',
                  image: 'image2.jpg',
                  typeroom: 'Phòng Family',
                  number: '4 người lớn',
                  area: '45m2',
                  price: 200000000,
                  oldprice: null
                },
                {
                  id : 3,
                  name: '2 giường đôi lớn',
                  image: 'image2.jpg',
                  typeroom: 'Phòng Family',
                  number: '4 người lớn',
                  area: '45m2',
                  price: 200000000,
                  oldprice: null
                }
              ];
        }
        localStorage.setItem("rooms", JSON.stringify(rooms));
        this.state = {
            rooms: rooms,
        }
    }
    onItemClicked(item){
        return (event) => {
            alert("Thank you your order!");
        }
    }
    render(){
        return (
            <div className="container">
                <div className="grid-container">
                    {
                        this.state.rooms.map((item,index) =>
                        <RoomItem 
                            key = {index}
                            item = {item} 
                            onClick={this.onItemClicked(item)}
                        />
                        )
                    }
                </div>
            </div>
        )
    }  
}
export default Rooms;