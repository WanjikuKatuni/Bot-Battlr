import React from "react";
import BotCard from "./BotCard";
// import BotsPage from "./BotsPage";

function BotCollection({bots, botArmy,setBotArmy, setBotInfo}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {bots.map((bot)=> (
          <BotCard key={bot.id}
          bot={bot}
          botArmy={botArmy}
          setBotArmy={setBotArmy}
          setBotInfo={setBotInfo} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
