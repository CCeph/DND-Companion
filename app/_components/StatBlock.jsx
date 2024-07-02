import Image from "next/image";

export default function StatBlock({ characterName }) {
  let characterInfo = {};
  switch (characterName) {
    case "commoner":
      characterInfo = {
        name: "Commoner",
        size: "Medium",
        type: "Humanoid",
        race: "(Any Race)",
        alignment: "Any Alignment",
        armorClass: "10",
        hitPoints: "4 (1d8)",
        speed: "30 ft",
        strength: "10 (+0)",
        dexterity: "10 (+0)",
        constitution: "10 (+0)",
        intelligence: "10 (+0)",
        wisdom: "10 (+0)",
        charisma: "10 (+0)",
        senses: "Passive Perception 10",
        languages: "Any one language (usually Common)",
        challenge: "0 (10 XP)",
        proficiencyBonus: "+2",
        actions: [
          {
            name: "Club.",
            description:
              "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
          },
        ],
      };
      break;

    default:
      break;
  }
  return (
    <div className="bg-statblock mt-5">
      <hr className="bg-statblock-bar h-2" />
      <div className="px-4 py-3">
        <h2 className="font-libre text-4xl font-bold tracking-wide text-red-800">
          {characterInfo.name}
        </h2>
        <p className="font-libre italic">
          {characterInfo.size} {characterInfo.type}, {characterInfo.alignment}
        </p>
        <svg height="5" width="100%" className="my-2 fill-current text-red-800">
          <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <p>
          <span className="font-bold text-red-800">Armor Class</span>{" "}
          <span className="text-red-800">{characterInfo.armorClass}</span>
        </p>
        <p>
          <span className="font-bold text-red-800">Hit Points</span>{" "}
          <span className="text-red-800">{characterInfo.hitPoints}</span>
        </p>
        <p>
          <span className="font-bold text-red-800">Speed</span>{" "}
          <span className="text-red-800">{characterInfo.speed}</span>
        </p>
        <svg height="5" width="100%" className="my-2 fill-current text-red-800">
          <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <div className="flex gap-5 text-center">
          <div className="flex flex-col">
            <p className="font-bold text-red-800">STR</p>
            <p className="text-red-800">{characterInfo.strength}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-red-800">DEX</p>
            <p className="text-red-800">{characterInfo.dexterity}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-red-800">CON</p>
            <p className="text-red-800">{characterInfo.constitution}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-red-800">INT</p>
            <p className="text-red-800">{characterInfo.intelligence}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-red-800">WIS</p>
            <p className="text-red-800">{characterInfo.wisdom}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-red-800">CHA</p>
            <p className="text-red-800">{characterInfo.charisma}</p>
          </div>
        </div>
        <svg height="5" width="100%" className="my-2 fill-current text-red-800">
          <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <p>
          <span className="font-bold text-red-800">Senses</span>{" "}
          <span className="text-red-800">{characterInfo.senses}</span>
        </p>
        <p>
          <span className="font-bold text-red-800">Languages</span>{" "}
          <span className="text-red-800">{characterInfo.languages}</span>
        </p>
        <p>
          <span className="font-bold text-red-800">Callenge</span>{" "}
          <span className="text-red-800">{characterInfo.challenge}</span>
        </p>
        <svg height="5" width="100%" className="my-2 fill-current text-red-800">
          <polyline points="0,0 400,2.5 0,5"></polyline>
        </svg>
        <h3 className="mt-8 text-2xl text-red-800">Actions</h3>
        <hr className="h-1 bg-red-800 opacity-80" />
        {/*           userPromptArray.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          }) */}
        {characterInfo.actions.map((action, index) => {
          return (
            <div key={index}>
              <p className="pt-5 italic">
                <span className="font-bold text-black">{action.name}</span>{" "}
                <span className="text-black">{action.description}</span>
              </p>
            </div>
          );
        })}
      </div>
      <hr className="bg-statblock-bar h-2" />
    </div>
  );
}
