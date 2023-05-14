import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    console.log(service)
    const {title,_id,price,img} = service

    const handleBookService = (event) => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const date = form.date.value 
        const email = user ?.email 
        const  booking = {
            customerName : name,
            email,
            img,
            date ,
            service : title,
            service_id : _id,
            price : price ,
        }

        console.log(booking)

        fetch('http://localhost:5000/bookings',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json',
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }


    return (
        <div>
            <h2>book service : {title}</h2>

           
        <form onSubmit={handleBookService}>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" />
          
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
     
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$'+price} className="input input-bordered" />
          
        </div>
      
      
       </div>
      
      
      
      
        <div className="form-control mt-6 btn-block">
         <input className="btn btn-primary" type="submit" value="Order Confirm" />
        </div>
      


        </form>
    </div>
  

    );
};

export default Checkout;