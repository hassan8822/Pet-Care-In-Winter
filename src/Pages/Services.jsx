import { Link, useLoaderData } from "react-router";


const Services = () => {
    const serviceData = useLoaderData();
    return (
         <div className="max-w-7xl mx-auto py-10 px-4">

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Winter Pet Care Services
        </h2>

        <p className="text-gray-500 mt-3">
          Keep your pets warm and healthy this winter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {serviceData.map(service => (

          <div
            key={service.serviceId}
            className="card bg-base-100 shadow-xl"
          >

            <figure>
              <img
                src={service.image}
                alt=""
                className="h-64 w-full object-cover"
              />
            </figure>

            <div className="card-body">

              <h2 className="card-title">
                {service.serviceName}
              </h2>

              <p>
                {service.description}
              </p>

              <div className="flex justify-between mt-3">
                <span>⭐ {service.rating}</span>

                <span className="font-bold text-primary">
                  ${service.price}
                </span>
              </div>

              <div className="badge badge-secondary mt-2">
                {service.category}
              </div>

              <div className="card-actions justify-end mt-4">

                <Link
                  to={`/pet/${service.serviceId}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Services;