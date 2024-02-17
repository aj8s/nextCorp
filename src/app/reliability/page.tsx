import Hero from "@/components/hero";
import reliabilityImage from "@/../public/reliability.jpg";
import Header from "@/components/header";

const Realiability = () => {
  return (
    <div>
      <Header />
      <Hero
        imageData={reliabilityImage}
        imageAlt="reliability image"
        title="Propfessional Reliable Services"
      />
    </div>
  );
};

export default Realiability;
