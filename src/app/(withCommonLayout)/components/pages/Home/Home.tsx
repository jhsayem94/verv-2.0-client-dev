import TrustPilot from "../../Shared/TrustPilot";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustPilot showGrow={true} showTrustPilot={true} />
    </>
  );
};

export default Home;
