import React from 'react';
import Header from '../components/Header';
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import BookingPage from '../components/BookingPage';

function Booking() {
     return (
        <div className="w-full flex bg-[url('/images/gondwana4.jpg')] bg-cover bg-center  min-h-screen">
            <div className="w-full py-5 px-7 flex flex-col lg:px-30 bg-gradient-to-r from-gray-200/90 via-gray-200/90 to-transparent min-h-screen ">
               <Header /> 
               <BookingPage />
            </div>
        </div>
     );
}

export default Booking;