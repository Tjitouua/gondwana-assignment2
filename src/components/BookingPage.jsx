import React, { useState } from 'react';
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import Form from './Form';

function BookingPage() {

    const [rates, setRates] = useState(null);
    const [arrival, setArrival] = useState(""); // Track dates from form
    const [departure, setDeparture] = useState("");


    return (
        <div className="py-10 w-full min-h-screen flex justify-start items-start">
        <div className="w-full py-3 gap-5 flex flex-col lg:flex-row justify-between items-start">
        <Form setRates={setRates} setArrival={setArrival} setDeparture={setDeparture} rates={rates} />

        
            
        <div className="w-full lg:w-2/3 bg-amber-700 text-white py-10 rounded-2xl flex flex-col gap-4 items-center justify-center">
             <label className="text-4xl font-bold">Available Rates</label>

             
             <div className="rounded-xl overflow-hidden">
            {/* Rates table  */}
             <table className="w-full text-black divide-x text-sm divide-black">
                 <thead className="bg-gray-100 rounded-tl-2xl">
                     <tr>
                        <th className="px-3 py-3 text-left">Unit Name</th>
                        <th className="px-3 py-3 text-left">Rate</th>
                        <th className="px-3 py-3 text-left">Date Range</th>
                        <th className="px-3 py-3 text-left">Availability</th>
                     </tr>
                 </thead>
                 <tbody className="bg-white">
                   {rates?.Legs?.length > 0 ? (
                       rates.Legs.map((leg, index) => (
                     <tr key={index}>
                         <td className="px-3 py-3 text-left">{leg["Special Rate Description"] ? leg["Special Rate Description"].replace("* STANDARD RATE CAMPING - ", "") : "N/A"}</td>
                         <td className="px-3 py-3 text-left">{leg["Effective Average Daily Rate"] ? leg["Effective Average Daily Rate"].toLocaleString() : "0"}</td>
                         <td className="px-3 py-3 text-left">{arrival || "N/A"} – {departure || "N/A"}</td>
                         <td className="px-3 py-3 text-left">{leg.ErrorMessage ? `Unavailable (${leg.ErrorMessage})` : "Available"}</td>
                     </tr>
                     ))
                     ) : (
                        <td colSpan={4} className="px-3 py-6 text-center text-xl font-bold">No data available</td>
                     )}
                     


                 </tbody>
             </table>
             </div>


         </div>



        </div>
   </div>
    );
}

export default BookingPage;


