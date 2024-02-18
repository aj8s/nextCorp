"use client";

import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function SnippetCreate() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <div>
      <form action={action}>
        <h1 className="font-bold m-3 text-white">Create Snippet</h1>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex gap-4">
            <label htmlFor="title" className="w-12 text-white">
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
            <label htmlFor="code" className="w-12 text-white">
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
        </div>
        {formState.message ? (
          <div className="m-2 p-2 border rounded bg-red-100 border-red-200 bg-gradient-to-r from-red-500">
            {formState.message}
          </div>
        ) : null}
        <button
          type="submit"
          className="bg-blue-300 text-black font-bold ml-12 rounded p-3 mt-2"
        >
          Create
        </button>
      </form>
    </div>
  );
}
