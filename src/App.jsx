import React, { useState } from 'react';
import Tic from "./modules/Tic";

const App =(props)=>{
    const [State,Setstate]=useState(false);
    const [stt,setstt]=useState(true);
    const Change = () =>{
        Setstate(true);
        setstt(false);
    }
    return(
        <>
            {stt?<button onClick={Change} className="button">Tic Tac Toe</button>:null}
            {State?<Tic/>:null}    
            {/* <Tic/> */}
        </>
    );
}
export default App;