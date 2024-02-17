import Header from "@/components/header";
import Image from "next/image";
import landImage from "@/../public/landHome.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={landImage}
          alt="landing image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700" />
      </div>
      <div className="pt-2 flex justify-center items-center">
        <h1 className="text-white text-6xl font-bold p-5">NextCorp</h1>
      </div>
      <div className="flex flex-col justify-center items-center pt-20 text-white text-4xl gap-4">
        <Link href="/cloud" className="border-2 rounded-lg p-4">
          Cloud
        </Link>
        <Link href="/snippets" className="border-2 rounded-lg p-4">
          Code Snippets
        </Link>
      </div>
    </div>
  );
}

/*

<div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imageData}
          alt={props.imageAlt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>

*/
