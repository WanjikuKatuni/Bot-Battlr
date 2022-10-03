import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({botArmy, setBotArmy}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {/*...and here...*/}
          {botArmy.map((bot)=>
          <BotCard key={bot.id}
          bot={bot}
          setBotArmy ={setBotArmy} />
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
