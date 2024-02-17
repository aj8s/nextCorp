import SnippetHeader from "@/components/snippetHeader";
import { db } from "@/db";
import Link from "next/link";

const SnippetHome = async () => {
  // fetch all snippets using prisma client
  const snippets = await db.snippet.findMany();

  // create a function that resurms all fetched data
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border-2 rounded ml-2 mr-2"
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex justify-between m-2 items-center text-white">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border-2 p-2 rounded-lg">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-white text-bold text-lg font-bold">
        {renderedSnippets}
      </div>
    </div>
  );
};

export default SnippetHome;
