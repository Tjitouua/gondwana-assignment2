import React, { useState } from 'react';
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

function Form( { setRates, setArrival, setDeparture, rates } ) {

    const [occupants, setOccupants] = useState(1);
    const [ages, setAges] = useState([25]);
    const [unit, setUnit] = useState("Luxury Room");
    const [arrivalLocal, setArrivalLocal] = useState("");
    const [departureLocal, setDepartureLocal] = useState("");
    const [error, setError] = useState("");

    // Decreasing # of Occupants 
    const decrease = () => {
         if(occupants > 1) {
             setOccupants(occupants - 1);
             setAges(prev => prev.slice(0, -1));
         }
    };


    // Increasing # of Occupants 
    const increase = () => {
          if(occupants < 20) {
              setOccupants(occupants + 1);
              setAges(prev => [...prev, 25]);
          }
    };

    const handleAgeChange = (index, value) => {
        const newAges = [...ages];
        newAges[index] = parseInt(value) || 0;
        setAges(newAges);
    };

    const handleSubmit = async () => {

        // Validating the dates before submitting 
        if(!arrivalLocal || !departureLocal) {
            setError("Both arrival and departure dates are required.");
            return;
        }
        if(new Date(arrivalLocal) >= new Date(departureLocal)) {
            setError("Departure date must be after arrival date.");
            return;
        }

        setError("");



        console.log("Button clicked!");

        const payload = {
           "Unit Name": unit,
           "Arrival": arrivalLocal,
           "Departure": departureLocal,
           "Occupants": occupants,
           "Ages": ages
        };

        try {
           const res = await fetch('http://localhost:8000/index.php', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(payload)
           });
           const data = await res.json();
           console.log("API data:", data);
           setRates(data);
           setArrival(arrivalLocal);
           setDeparture(departureLocal);
           console.log(data);
        } catch (err) {
           console.error(err);
        }
    };



     return (
                    // Form Div 
            <div className="w-full md:w-1/3 bg-amber-700 text-white rounded-2xl px-4 gap-2 py-12 flex flex-col justify-center items-center">
                      <label className="text-4xl font-bold">Booking Details </label>
                      {/* Unit Name  */}
                      <div className="w-full flex flex-col gap-2">
                          <label>Unit Name</label>
                          <select value={unit} onChange={e => setUnit(e.target.value)} className="bg-white text-black w-full px-2 h-10 rounded-md">
                              <option>Luxury Room</option>
                              <option>Guest House</option>
                          </select>
                      </div>
                      {/* Dates Div  */}
                      <div className="w-full flex justify-center gap-3 items-center">
                          {/* Arrival Date  */}
                          <div className="w-1/2 py-1 flex flex-col gap-2">
                              <label>Arrival Date</label>
                              <input value={arrivalLocal} onChange={e => setArrivalLocal(e.target.value)} type="date" className="h-10 rounded-md bg-white text-black px-2" />
                          </div>
                          {/* Departure Date  */}
                          <div className="w-1/2 py-1 flex flex-col gap-2">
                              <label>Departure Date</label>
                              <input value={departureLocal} onChange={e => setDepartureLocal(e.target.value)} type="date" className="h-10 rounded-md bg-white text-black px-2" />
                          </div>
                      </div>
    
                      {/* Number of occupants Div */}
                      <div className="w-full flex flex-col gap-2">
                         <label>Number of Occupants</label>
                         <div className="flex justify-start items-center gap-5 px-2">
                              <button onClick={decrease} className="bg-white text-black px-3 py-2 rounded-md cursor-pointer hover:white/60 hover:bg-transparent hover:border-2 hover:border-black"><TiMinus /></button>
                                  <label>{occupants}</label>
                              <button onClick={increase} className="bg-white text-black px-3 py-2 rounded-md cursor-pointer hover:white/30 hover:bg-transparent hover:border-2 hover:border-black"><TiPlus /></button>
                         </div>
                      </div>
    
                      {/* Ages of Occupants  */}
                      <div className="w-full flex flex-col gap-2">
                         <label>Ages of Occupants</label>
                         {/* Div for all the ages  */}
                         <div className="w-full py-2 px-2 flex flex-wrap justify-start gap-3">
                             {/* Div for only one age  */}
                             {Array.from({ length: occupants }, (_, index) => (
                             <div key={index} className="flex flex-col gap-1">
                                <label>Guest {index + 1}</label>
                                <input value={ages[index]} onChange={e => handleAgeChange(index, e.target.value)} className="bg-white text-black px-2 h-10 w-16 rounded-md" type="text" />
                             </div>
                             ))}
    
                         </div>
                      </div>

                      {error && (
                        <p className="text-gray-300 font-semibold text-sm">{error}</p>
                      )}
    
                      {/* Button  */}
                      <button  type="button" onClick={handleSubmit} className="shadow w-full py-2 px-2 flex justify-center items-center rounded-md bg-white hover:bg-transparent hover:border-2 hover:border-black cursor-pointer text-black font-bold">Search Available Rates</button>

            </div>
     );
}

export default Form;
