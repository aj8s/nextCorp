import CloudHero from "@/components/cloudHero";
import perfImage from "@/../public/performance.jpg";
import Header from "@/components/header";

export default function Performance() {
  return (
    <div>
      <CloudHero
        imageData={perfImage}
        imageAlt="factory welding"
        title="We servce high performing application"
      />
    </div>
  );
}
