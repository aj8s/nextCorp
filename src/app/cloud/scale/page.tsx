import CloudHero from "@/components/cloudHero";
import scaleImage from "@/../public/scale.jpg";
import Header from "@/components/header";

const Scale = () => {
  return (
    <div>
      <CloudHero
        imageData={scaleImage}
        imageAlt="scale image"
        title="Professionally Scaled Services"
      />
    </div>
  );
};

export default Scale;
