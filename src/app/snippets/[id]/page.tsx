import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
interface ShowSnippetPageProps {
  params: {
    id: string;
  };
}

const ShowSnippetPage = async (props: ShowSnippetPageProps) => {
  // artificial timeout (2s) to display the Loading page in action
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // Log the URL params -
  console.log(props);

  // Fetch the value from the database
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });
  // Handle Null value
  if (!snippet) {
    return notFound();
  }
  // Display the value
  return (
    <div className="text-white">
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="border rounded p-2"
          >
            Edit
          </Link>
          <button className="border rounded p-2">Delete</button>
        </div>
      </div>
      <pre className="m-4 border rounded-lg border-slate-700 bg-gradient-to-r from-slate-800 p-3 font-mon0 text-lg">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default ShowSnippetPage;
