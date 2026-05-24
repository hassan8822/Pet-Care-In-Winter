import { Link, useLoaderData, useParams } from "react-router";


const ServiceDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    const singleService = data.find(service => service.serviceId == id)
    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <img className="w-full h-100 object-cover rounded-2xl" 
             src={singleService.image} 
            alt="" />
          <div className="mt-6 space-y-4">
        <h2 className="text-4xl font-bold">
          {singleService.serviceName}
        </h2>
          <p className="text-gray-500">
          {singleService.description}
        </p>
            
        </div>

        <div className="card bg-base-100 shadow-xl mt-10 p-6">
        <h2 className="text-2xl font-bold mb-5">
          Book This Service
        </h2>

        <form className="space-y-4">
 <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" 
          className="input" placeholder="Your Name"
          required />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Your Email"
          required />

       
        </fieldset>
      
           <Link to="/">
        
          <button className="btn btn-primary ">
            Book Now
          </button>
          <div className="flex justify-end">
             <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none mt-4">
           Go Back
           </button>

          </div>
           

        </Link>

 
       
        </form>
      </div>

    </div>




 
        

    );
};

export default ServiceDetails;