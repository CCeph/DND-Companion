"use client";

export default function NPCForm() {
  return (
    <main className="flex flex-1 justify-center">
      <form action={generateNPC} className="m-5 flex max-w-2xl flex-1 flex-col">
        <h1 className="place-self-center text-4xl font-semibold">
          NPC Generator
        </h1>
        <p className="mt-3 place-self-center text-lg">
          Filling in any of the fields below will result in the NPC generated
          having those attributes. All fields are optional. If you would like a
          completely random NPC, just click &quot;Generate&quot;!
        </p>
        <div className="m-5 flex flex-1 flex-col">
          <label htmlFor="race">NPC Race</label>
          <input
            type="text"
            id="race"
            name="race"
            className="my-2 rounded-sm border-2 p-2"
          />
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            name="gender"
            id="gender"
            className="my-2 rounded-sm border-2 p-2"
          />
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            name="occupation"
            id="occupation"
            className="my-2 rounded-sm border-2 p-2"
          />
          <label htmlFor="class">Class</label>
          <input
            type="text"
            name="class"
            id="class"
            className="my-2 rounded-sm border-2 p-2"
          />
          <label htmlFor="otherDetails">Other Details</label>
          <textarea
            name="otherDetails"
            id="otherDetails"
            className="my-2 rounded-sm border-2 p-2"
          ></textarea>
          <button
            type="submit"
            className="my-2 place-self-center rounded-xl border-2 bg-black p-3 text-lg text-white"
          >
            Generate
          </button>
        </div>
      </form>
    </main>
  );
}
