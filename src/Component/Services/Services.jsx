import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services,setServices] = useState([])
  
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    
    },[])
    
    
    return (
        <div className="mt-4">
           <div className="text-center">
           <h2 className="text-xl text-orange-600 font-bold">Our Services</h2>
            <h2 className="text-2xl ">Our Services Area </h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.</p>
           </div> 

           <div className=" gap-6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                services.map(service => <Service
                service={service}
                key={service._id}>

                </Service>)
            }
           </div>
            
        </div>
    );
};

export default Services;