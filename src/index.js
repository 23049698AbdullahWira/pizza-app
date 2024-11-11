import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(){
    const currentHour = new Date().getHours();

    return (
        <div className="container">
            <Header/>
            {currentHour < 22 && <p style={{fontWeight: 700,}}>Authentic Italian Cuisine All From Our Stone Oven</p>}
            <Menu/>
            <Footer/>
            <Order/>
        </div>
    );
}

function Header(){
    return (
        <h1 className="header">Wira's Pizza Co.</h1>
    );
}

function Pizza({name, ingredients, price, photoName}){
    return (
        <div className="pizza">
        <img src={`pizzas/${photoName}`}></img>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <p>{price}</p>
        </div>
    );
}

function Menu(){
    const pizzaData = [
        {
            name: "Spinaci",
            ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
            price: 10.99,
            photoName: "spinaci.jpg"
        },
        {
            name: "Salamino",
            ingredients: "Tomato, mozzarella, salami",
            price: 10.99,
            photoName: "salamino.jpg"
        },
        {
            name: "Focaccia",
            ingredients: "Bread with Italian Olive Oil and Rosemary",
            price: 7.99,
            photoName: "focaccia.jpg"
        },
        {
            name: "Margherita",
            ingredients: "Tomato, Mozzarella, Basil",
            price: 10.99,
            photoName: "margherita.jpg"
        },
        {
            name: "Funghi",
            ingredients: "Tomato, Mozzarella, Mushroom, Onion",
            price: 10.99,
            photoName: "funghi.jpg"
        },
        {
            name: "Prosciutto",
            ingredients: "Tomato, Mozzarella, Ham, Aragula, Burrata Cheese",
            price: 13.99,
            photoName: "prosciutto.jpg"
        },
    ];

    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <div className="pizzas">
                {pizzaData.map((pizza, index) => (
                    <Pizza 
                        key={index} 
                        name={pizza.name} 
                        ingredients={pizza.ingredients} 
                        price={pizza.price} 
                        photoName={pizza.photoName} 
                    />
                ))}
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>Thank you for visiting Wira's Pizza Co.</p>
        </footer>
    );
}

function Order() {
    const hours = new Date().getHours();
    const isOpen = hours < 22; // Open before 10 PM

    return (
        <div className="order">
            <p>{isOpen ? "We're Open!" : "We're Closed"}</p>
            <button className="btn">Order Now</button>
        </div>
    );
}

const rooot = ReactDOM.createRoot(document.getElementById("root"));
rooot.render(<App/>);