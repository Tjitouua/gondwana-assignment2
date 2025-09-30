import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return (
       <div className="w-full min-h-screen bg-transparent flex flex-col gap-10 justify-center items-start">
           <label className="text-6xl -mt-10 font-bold text-amber-700">Gondwana Booking Checker</label>
           <label className="text-xl max-w-5xl">Quickly check rates and availability for Gondwana stays. Our booking tool makes
            it easy to find the perfect accommodation by showing you available units, prices, and date 
            ranges in real time.  Whether you’re planning a weekend getaway, a family trip, or a longer 
            holiday, this system helps you make informed decisions before you book. Save time and explore
             your options with just a few clicks.</label>

            <Link to="/booking" className="px-5 py-2 max-w-lg w-full rounded-lg bg-amber-700 flex justify-center items-center cursor-pointer text-white font-bold hover:border hover:border-black hover:bg-transparent hover:text-black">
                Get Started
            </Link>
       </div>
    );
}

export default Hero;