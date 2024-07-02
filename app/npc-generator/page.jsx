"use client";

import { useFormState } from "react-dom";
import { generateNPC } from "../actions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import StatBlock from "../_components/StatBlock";

const initialState = {
  statBlock: "",
  response: "No NPC generated",
};

export default function NPCForm() {
  const [state, formAction] = useFormState(generateNPC, initialState);
  const userPromptArray = state.response
    .split("\n")
    .filter((element) => element !== "");
  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="m-5 flex max-w-2xl flex-col">
        <h1 className="place-self-center text-4xl font-semibold">
          NPC Generator
        </h1>
        <p className="mt-3 place-self-center text-lg">
          Filling in any of the fields below will result in the NPC generated
          having those attributes. All fields are optional. If you would like a
          completely random NPC, just click &quot;Generate&quot;!
        </p>
        <Formik
          initialValues={{
            name: "",
            race: "",
            gender: "",
            occupation: "",
            class: "",
            statBlock: "commoner",
            otherDetails: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().max(50, "Must be 50 characters or less"),
            race: Yup.string().max(40, "Must be 40 characters or less"),
            gender: Yup.string().max(40, "Must be 40 characters or less"),
            occupation: Yup.string().max(50, "Must be 50 characters or less"),
            class: Yup.string().max(50, "Must be 50 characters or less"),
            otherDetails: Yup.string().max(
              150,
              "Must be 150 characters or less",
            ),
          })}
          onSubmit={formAction}
        >
          <Form className="m-5 flex flex-1 flex-col">
            <label htmlFor="name">NPC Name (Optional)</label>
            <Field
              name="name"
              type="text"
              className="my-2 rounded-sm border-2 p-2"
              autoComplete="off"
            ></Field>
            <ErrorMessage
              name="name"
              component={"div"}
              className="mb-4 text-red-600"
            ></ErrorMessage>

            <label htmlFor="race">Race (Optional)</label>
            <Field
              name="race"
              type="text"
              className="my-2 rounded-sm border-2 p-2"
              autoComplete="off"
            ></Field>
            <ErrorMessage
              name="race"
              component={"div"}
              className="mb-4 text-red-600"
            ></ErrorMessage>

            <label htmlFor="gender">Gender (Optional)</label>
            <Field
              type="text"
              name="gender"
              className="my-2 rounded-sm border-2 p-2"
              autoComplete="off"
            />
            <ErrorMessage
              name="gender"
              component={"div"}
              className="mb-4 text-red-600"
            ></ErrorMessage>

            <label htmlFor="occupation">Occupation (Optional)</label>
            <Field
              type="text"
              name="occupation"
              className="my-2 rounded-sm border-2 p-2"
              autoComplete="off"
            />
            <ErrorMessage
              name="occupation"
              component={"div"}
              className="mb-4 text-red-600"
            ></ErrorMessage>

            <label htmlFor="class">Class (Optional)</label>
            <Field
              type="text"
              name="class"
              className="my-2 rounded-sm border-2 p-2"
              autoComplete="off"
            />
            <ErrorMessage
              name="class"
              component={"div"}
              className="mb-4 text-red-600"
            ></ErrorMessage>

            <label htmlFor="statBlock">Stat Block</label>
            <Field
              as="select"
              name="statBlock"
              className="my-2 rounded-sm border-2 bg-white p-2"
            >
              <option value="commoner">Commoner</option>
              <option value="guard">Guard</option>
              <option value="bandit">Bandit</option>
              <option value="banditCaptain">Bandit Captain</option>
            </Field>

            <label htmlFor="otherDetails">Other Details (Optional)</label>
            <Field
              name="otherDetails"
              className="my-2 rounded-sm border-2 p-2"
              as="textarea"
              autoComplete="off"
            ></Field>
            <ErrorMessage
              name="otherDetails"
              component={"div"}
              className="mb-4 text-red-600"
            ></ErrorMessage>
            <button
              type="submit"
              className="my-2 place-self-center rounded-xl border-2 bg-black p-3 text-lg text-white"
            >
              Generate
            </button>
          </Form>
        </Formik>
      </div>

      <div className="m-5 mb-20 max-w-2xl rounded-xl border border-gray-400 p-8">
        <h2 className="mb-5 text-center text-3xl">Generated NPC</h2>
        <hr className="mb-5" />
        {state === initialState ? (
          <p className="text-center">Your generated NPC will appear here.</p>
        ) : (
          <div>
            {userPromptArray.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
            <StatBlock characterName={state.statBlock}></StatBlock>
          </div>
        )}
      </div>
    </main>
  );
}
