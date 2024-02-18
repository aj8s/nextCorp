"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  //   console.log(id, code);

  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/snippets");
  redirect("/snippets");
}

// A function that  will be call when user fills the form
export const createSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  try {
    // Validate the user's input
    const title = formData.get("title");
    const code = formData.get("code");

    // sample Validation
    if (typeof title !== "string" || title.length < 3) {
      return { message: "You must enter valid title" };
    }

    if (typeof code !== "string" || code.length < 7) {
      return { message: "You must enter valid code" };
    }

    // Create the new record in db
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong" };
    }
  }

  revalidatePath("/snippets");
  // Redirect users to  the home page
  redirect("/snippets");
};
