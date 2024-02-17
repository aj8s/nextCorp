import { db } from "@/db";
import { notFound } from "next/navigation";

interface ShowSnippetPageProps {
  params: {
    id: string;
  };
}

const ShowSnippetPage = async (props: ShowSnippetPageProps) => {
  // artificial timeout (2s) to display the Loading page in action
  await new Promise((resolve) => setTimeout(resolve, 2000));

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
  return <div className="text-white">{snippet.title}</div>;
};

export default ShowSnippetPage;
