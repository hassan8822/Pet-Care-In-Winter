import Hero from "../Components/Hero";
import TipsForPet from "../Components/TipsForPet";
import WinterCareService from "../Components/WinterCareService";


const Home = () => {
    return (
        <div>
          <section>
            <Hero></Hero>
          </section>
          <section>
            <WinterCareService></WinterCareService>
          </section>
          <section>
            <TipsForPet></TipsForPet>
          </section>
            
        </div>
    );
};

export default Home;