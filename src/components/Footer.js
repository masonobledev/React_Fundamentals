import React from 'react';

const Footer = () => {
    let d = new Date();
    let y = d.getFullYear();

    return(
                      
           <p>Copyright EFA { y }</p>
           
    )
};

export default Footer;