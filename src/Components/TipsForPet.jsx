

const TipsForPet = () => {
  
  const tips = [
    { id: 1, icon: "🐾", title: "Protect the Paws", desc: "Salt and de-icing chemicals cause chemical burns. Wash paws thoroughly with lukewarm water after outdoor walks." },
    { id: 2, icon: "🧥", title: "Layer Up Appropriately", desc: "Short-haired or small breeds lose body heat incredibly fast. Equip them with well-fitted, water-resistant coats." },
    { id: 3, icon: "💧", title: "Hydration is Key", desc: "Winter air is extremely drying. Keep clean water bowls filled to prevent cracked skin and flaky winter coats." }
  ];

  const vets = [
    { id: 1, name: "Dr. Sarah Jenkins", role: "Chief Veterinary Officer", image: "https://i.ibb.co.com/1GQ4b0HH/jonatan-bustos-7gcj-Fe-Xjayw-unsplash.jpg" },

    { id: 2, name: "Dr. Marcus Vance", role: "Animal Behaviorist", image: "https://i.ibb.co.com/398Pq9BY/alexander-mass-sdp-Iu-Ib-Ka-Qg-unsplash.jpg" },

    { id: 3, name: "Dr. Elena Rostova", role: "Dermatology Specialist", image: "https://i.ibb.co.com/HDCnYCNc/happy-veterinarian-woman-using-stethoscope-listen-heart-cute-beagle-dog-caucasian-vet-hispanic-man-e.jpg" }
  ];

  return (
    <div className="bg-base-200/50 py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        
     {/* winter care tips */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-base-content mb-2">
              Winter Care Tips for Pets
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map(tip => (
              <div key={tip.id} className="bg-base-100 p-6 rounded-2xl shadow-md border border-gray-200 flex gap-4 items-start">
                <span className="text-4xl bg-gray-100 p-3 rounded-xl shrink-0">{tip.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-base-content mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/*   Expert Veterinary */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-base-content mb-2">
              Meet Our Expert Vets
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto text-sm">
              Highly certified, passionate specialists dedicated to keeping your family safe all winter long.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {vets.map(vet => (
              <div key={vet.id} className="bg-base-100 rounded-2xl overflow-hidden shadow-lg border border-base-200 text-center w-full max-w-xs group">
                <div className="relative pt-[100%] overflow-hidden bg-base-300">
                  <img 
                    src={vet.image} 
                    alt={vet.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-base-content">{vet.name}</h3>
                  <p className="text-xs font-semibold uppercase text-primary  mt-1">{vet.role}</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <button className="btn btn-xs btn-ghost btn-circle">✉️</button>
                    <button className="btn btn-xs btn-ghost btn-circle">📞</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
    );
};

export default TipsForPet;