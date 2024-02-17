import homeImg from "@/../public/home.jpg";
import Hero from "@/components/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero
        imageData={homeImg}
        imageAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
