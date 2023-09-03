import React from 'react';
import  { useState } from "react";


function FavSport() {
  const [sport, setSport] = useState("cricket");

  return (
    <>
      <h1>My Most favorite Sport:  <em>{sport}!</em> </h1>
      <button type="button"  onClick={() => setSport("Cricket")}>Cricket</button>
      <button type="button"  onClick={() => setSport("Fifa")} >Fifa</button>
      <button type="button"  onClick={() => setSport("Tennis")} >Tennis</button>
      <button type="button"  onClick={() => setSport("Boxing")} >Boxing</button>
      <button type="button"  onClick={() => setSport("Chess")} >Chess</button>

    </>
  );
}


const App = () =>  {
   return (
         <main> 
             <FavSport />
         </main> 
 )
}

export default App; 