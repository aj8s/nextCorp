import Hero from "@/components/hero";
import scaleImage from "@/../public/scale.jpg";
import Header from "@/components/header";

const Scale = () => {
  return (
    <div>
      <Header />
      <Hero
        imageData={scaleImage}
        imageAlt="scale image"
        title="Professionally Scaled Services"
      />
    </div>
  );
};

export default Scale;
