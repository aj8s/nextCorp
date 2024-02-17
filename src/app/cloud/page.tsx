import Header from "@/components/header";
import CloudHero from "@/components/cloudHero";
import homeImg from "@/../public/home.jpg";

const CloudHome = () => {
  return (
    <div>
      <CloudHero
        imageData={homeImg}
        imageAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
};

export default CloudHome;
