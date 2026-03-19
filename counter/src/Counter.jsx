import React, { useState } from "react";
import Naytto from "./Naytto";
import Kasvatus from "./Kasvatus";
import Vahennys from "./Vahennys";
import Nollaus from "./Nollaus";
import TuplaKasvatus from "./Tuplakasvatus";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Naytto count={count} />

      <Kasvatus setCount={setCount} />
      <Vahennys setCount={setCount} />
      <Nollaus setCount={setCount} />
      <TuplaKasvatus setCount={setCount} />
    </div>
  );
};

export default Counter;