import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return (
    <div className="Home">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet"></link>
        <header>
            <Link id="title" to="/">
                OhMyDay
            </Link>
        </header>
        <nav>
            <Link id="nav" to= "/calendar">
                calendar
            </Link>
            <Link id="nav" to= "/todolist">
                todolist
            </Link>
            <Link id="nav" to= "/diary">
                diary
            </Link>
        </nav>


    </div>
    );
}

export default Home;