import CloudHero from "@/components/cloudHero";
import reliabilityImage from "@/../public/reliability.jpg";
import Header from "@/components/header";

const Realiability = () => {
  return (
    <div>
      <CloudHero
        imageData={reliabilityImage}
        imageAlt="reliability image"
        title="Propfessional Reliable Services"
      />
    </div>
  );
};

export default Realiability;
