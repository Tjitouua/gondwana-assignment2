import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
       <header className="w-full min-h-20 flex flex-col gap-3">
        <div className="w-full min-h-20 flex justify-between items-center">
          {/* Logo div  */}
            <div className="h-20 w-30">
                <img className="w-full h-full object-cover" src="/images/gondwanaLogo2.png" />
            </div>

            {/* Navigations  */}
            <nav>
                <ul className="gap-11 hidden xl:flex font-bold">
                    <a className="hover:text-amber-800" href="/">Home</a>
                    <a className="hover:text-amber-800" href="/booking">Booking</a>
                </ul>
            </nav>

            <div className="xl:hidden flex items-center gap-3">
               {!menuOpen && (
                  <IoMenu className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
               )}
               {menuOpen && (
                  <RxCross2 className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
               )}
            </div>


          </div>

         {menuOpen && (
          <div className="w-full py-2 xl:hidden flex flex-col gap-4">
              <a className="hover:text-amber-800 font-bold" href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a className="hover:text-amber-800 font-bold" href="/booking" onClick={() => setMenuOpen(false)}>Booking</a>
          </div>
          )}


       </header>
    );
}

export default Header;