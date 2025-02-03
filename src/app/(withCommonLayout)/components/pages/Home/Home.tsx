import TrustPilot from "../../Shared/TrustPilot";
import Hero from "./Hero";
import HowItWork from "./HowItWork";
import PropertyDemand from "./PropertyDemand";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustPilot showGrow={true} showTrustPilot={true} />
      <HowItWork />
      <PropertyDemand />
    </>
  );
};

export default Home;
