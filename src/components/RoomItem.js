import React, {Component } from 'react';
import './Rooms.css';
import NumberFormat from 'react-number-format';
class RoomItem extends Component{
    render(){
        const {onClick} = this.props;
        return(
            <div className="grid-item">
                <img 
                src={"img/"+this.props.item.image} 
                    alt=""
                    width={300}
                />
                <h3>{ this.props.item.typeroom }</h3>
                <p><span className="Left">PHÒNG</span> <span className="Right">{ this.props.item.name }</span></p>
                <hr></hr>
                <p><span className="Left">CHỖ NGHỈ</span> <span className="Right">{this.props.item.number}</span></p> 
                <hr></hr>
                <p><span className="Left">KÍCH THƯỚC</span> <span className="Right">{this.props.item.area}</span></p>
                <hr></hr>
                <p><span className="Left">GIÁ PHÒNG</span> <span className="Right">
                    <b>
                        <NumberFormat 
                        value={this.props.item.price} displayType={'text'} 
                        thousandSeparator={true} />
                    </b> vnđ</span>
                </p>
                {this.props.item.oldprice?
                <div>
                    <hr></hr>
                    <p>
                        <span className="Left">GIÁ CŨ</span> 
                        <span className="Right">
                        <b><strike>
                            <NumberFormat 
                                value={this.props.item.oldprice} displayType={'text'} 
                                thousandSeparator={true} />
                            </strike>
                        </b> vnđ
                        </span>
                </p>
                </div>
                :null}
                <hr></hr>
                <p><span className="Left"> <a href="#">XEM</a></span> <span className="Right"><a href="#" onClick={onClick}>Đặt phòng</a></span></p>
            </div>
        )
    }
}
export default RoomItem;