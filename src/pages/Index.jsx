import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

function Index() {
      return (
         <div className="w-full min-h-screen bg-[url('/images/gondwana.jpg')] bg-cover bg-center flex flex-col">
             <div className="bg-gradient-to-r from-gray-200/90 via-gray-200/90 to-transparent w-full min-h-screen py-5 px-7 lg:px-30 flex flex-col">
               <Header />
               <Hero />
             </div>
         </div>
      );
}

export default Index;