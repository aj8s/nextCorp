import Hero from "@/components/hero";
import perfImage from "@/../public/performance.jpg";
import Header from "@/components/header";

export default function Performance() {
  return (
    <div>
      <Header />
      <Hero
        imageData={perfImage}
        imageAlt="factory welding"
        title="We servce high performing application"
      />
    </div>
  );
}
