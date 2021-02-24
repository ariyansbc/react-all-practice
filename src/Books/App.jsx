import React, { Component } from 'react'

export default class App extends Component {


    render() {
        const bookStyle = {
            float: 'left',
            padding: '.5em',
            cursor: 'pointer',
            textAlign: 'center',
            border: '2px solid gold',
            margin: '1em'
        }
        const bookImgStyle = {
            width: '200px',
            height: '250px'
        }
        //creating a Books array
        const Books = [
            {
                name: 'A History of Food,',
                img: "https://images-na.ssl-images-amazon.com/images/I/51stCEdJhPL._SX331_BO1,204,203,200_.jpg",
                writer: "Mark Bittman"
            },
            {
                name: "The Unwilling: A Novel ",
                img: "https://images-na.ssl-images-amazon.com/images/I/414Puj9vmAL._SX327_BO1,204,203,200_.jpg",
                writer: "John Hart"
            }, {
                name: "Black Buck",
                img: "https://images-na.ssl-images-amazon.com/images/I/41VcIGJKufL._SX329_BO1,204,203,200_.jpg",
                writer: "Mateo Askaripour",
            }, {
                name: "The Four Winds: A Novel",
                img: "https://images-na.ssl-images-amazon.com/images/I/51r9ZiBU6rL._SX327_BO1,204,203,200_.jpg",
                writer: 'Kristin Hannah'
            }
        ];

        return (
            <div>
                <div style={bookStyle}>
                    <img style={bookImgStyle} src={Books[0].img} alt="" />
                    <h3>Name: {Books[0].name}</h3>
                    <h5>Writer:{Books[0].writer}</h5>
                </div>
                <div style={bookStyle} >
                    <img style={bookImgStyle} src={Books[1].img} alt="" />
                    <h4>Name: {Books[1].name}</h4>
                    <h5>Writer:{Books[1].writer}</h5>
                </div>
                <div style={bookStyle}>
                    <img style={bookImgStyle} src={Books[2].img} alt="" />
                    <h4>Name: {Books[2].name}</h4>
                    <h5>Writer:{Books[2].writer}</h5>
                </div>
                <div style={bookStyle}>
                    <img style={bookImgStyle} src={Books[3].img} alt="" />
                    <h4>Name: {Books[3].name}</h4>
                    <h5>Writer:{Books[3].writer}</h5>
                </div>
            </div>
        )
    }
}

