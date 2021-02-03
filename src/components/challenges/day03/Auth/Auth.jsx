import React, { useState } from 'react';
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Auth = () => {
    const [showLogin, setShowLogin] = useState(true);

    function handleToggle(){
        setShowLogin(false);
    }

    return (
    <div>
        {showLogin === true ? <Login /> : <Signup />} 

        <button onClick={handleToggle}>Click To Toggle</button>
        
    </div>
    );
};
 
export default ;