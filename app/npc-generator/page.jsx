import OpenAI from "openai";

const openai = new OpenAI();

export default function NPCForm() {
  async function generateNPC(formData) {
    "use server";

    const rawFormData = {
      race: formData.get("race"),
      occupation: formData.get("occupation"),
      class: formData.get("class"),
      otherDetails: formData.get("otherDetails"),
    };

    console.log(rawFormData);

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a DND Dungeon Master. You will be given some information by the user about a NPC You need to generate a name (max 50 words), background (max 150 words), and personality (max 100 words) for the NPC.",
        },
        {
          role: "user",
          content:
            "The NPC's race is Human. Their occupation is Merchant. Their class is Druid. Other details about this NPC are: short.",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
    console.log(completion.choices[0]);
    console.log(completion.choices[0].message.content);
  }

  return (
    <main className="flex flex-1 justify-center">
      <form action={generateNPC} className="m-5 flex max-w-2xl flex-1 flex-col">
        <h1 className="place-self-center text-4xl font-semibold">
          NPC Generator
        </h1>
        <div className="m-5 flex flex-1 flex-col">
          <label htmlFor="race">
            NPC Race <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="race"
            name="race"
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
