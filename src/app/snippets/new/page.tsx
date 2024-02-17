import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreate = () => {
  // A function that  will be call when user fills the form
  const createSnippet = async (formData: FormData) => {
    // This needs to be a server action
    "use server";

    // Validate the user's input
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Create the new record in db

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);

    // Redirect users to  the home page
    redirect("/snippets");
  };

  return (
    <form action={createSnippet}>
      <h1 className="font-bold m-3">Create Snippet</h1>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
      </div>
      <button type="submit" className="bg-blue-300 ml-12 rounded p-3 mt-2">
        Create`
      </button>
    </form>
  );
};

export default SnippetCreate;
