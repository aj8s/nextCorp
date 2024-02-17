import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snipetEditForm";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="text-white m-4">
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
