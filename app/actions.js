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

  //Validation
  if (
    formData.race.length > 40 ||
    formData.gender.length > 40 ||
    formData.occupation.length > 50 ||
    formData.class.length > 50 ||
    formData.otherDetails.length > 50
  ) {
    return "An error occured. Please check your inputs and try again.";
  }

  const userPrompt = generateUserPrompt(formData);

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
