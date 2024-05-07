"use server";

import OpenAI from "openai";

const openai = new OpenAI();

function generateUserPrompt(rawFormData) {
  let userPrompt = "";
  if (!(rawFormData.race === "")) {
    userPrompt += `The NPC's race is: ${rawFormData.race}\n`;
  }
  if (!(rawFormData.gender === "")) {
    userPrompt += `Their gender is: ${rawFormData.gender}\n`;
  }
  if (!(rawFormData.occupation === "")) {
    userPrompt += `Their occupation is: ${rawFormData.occupation}\n`;
  }
  if (!(rawFormData.class === "")) {
    userPrompt += `Their DND class is: ${rawFormData.class}\n`;
  }
  if (!(rawFormData.otherDetails === "")) {
    userPrompt += `Other details about them: ${rawFormData.otherDetails}\n`;
  }
  if (userPrompt === "") {
    userPrompt = "The user did not provide any additional information.";
  }
  return userPrompt;
}

export async function generateNPC(prevState, formData) {
  "use server";

  const rawFormData = {
    race: formData.get("race"),
    gender: formData.get("gender"),
    occupation: formData.get("occupation"),
    class: formData.get("class"),
    otherDetails: formData.get("otherDetails"),
  };

  const userPrompt = generateUserPrompt(rawFormData);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a DND Dungeon Master. You will be given some information by the user about a NPC You need to generate a name (max 50 words), background (max 150 words), and personality (max 100 words) for the NPC.",
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
}
