import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [botInfo, setBotInfo] = useState([]);
  const [botArmy, setBotArmy] =useState([]);

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((response)=> response.json())
    .then((data)=> setBotInfo(data))
  }, [])

  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;
