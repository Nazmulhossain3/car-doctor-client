import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {title,img,price,_id} = service
    console.log(service)
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-600">Price : ${price}</p>
          <div className="card-actions">
            <Link to={`/bookings/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>

            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;