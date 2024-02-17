import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          NextCorp
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/cloud/performance">Performance</Link>
          <Link href="/cloud/reliability">Realiability</Link>
          <Link href="/cloud/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
