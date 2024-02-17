import Link from "next/link";
import landImage from "@/../public/landHome.jpg";
import Image from "next/image";

const SnippetHeader = () => {
  return (
    <div className="w-auto z-10">
      <div className="absolute -z-10 inset-0">
        <Image
          src={landImage}
          alt="landing image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700" />
      </div>
      <nav className="container relative flex flex-wrap text-white items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl ">
          NextCorp
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/snippets">Snippets</Link>
          <Link href="/snippets/new">Create</Link>
        </div>
      </nav>
    </div>
  );
};

export default SnippetHeader;
