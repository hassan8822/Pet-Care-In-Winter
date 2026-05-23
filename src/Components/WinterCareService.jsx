import { Link, useLoaderData } from "react-router";


const WinterCareService = () => {
    const petData = useLoaderData();

    return (
        <div className="bg-base-100">
     
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content mb-2">
            Popular Winter Care Services
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            petData?.map((singleData) => (
              <div key={singleData.serviceId} className="card bg-base-100 shadow-xl border border-base-200">
          
                <figure className="relative pt-[60%]">
                  <img 
                    src={singleData.image} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </figure>
                
                <div className="card-body p-6">
                
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="card-title text-lg font-bold">
                      {singleData.serviceName}
                    </h3>
                    <div className="badge badge-success font-bold shrink-0">
                      ⭐ {singleData.rating}
                    </div>
                  </div>
               
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-base-200">
                    <div className="text-2xl font-black text-primary">
                      ${singleData.price}
                    </div>
                    <Link
                      to={`/service/${singleData.serviceId}`}
                      className="btn btn-primary btn-sm rounded-md font-bold text-white tracking-wide"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>

            
        </div>
    );
};

export default WinterCareService;