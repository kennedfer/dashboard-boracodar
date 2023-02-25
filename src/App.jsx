import { useState } from "react";
import { NpsContainer } from "./components/NpsContainer";
import iconScore from "./assets/scores/good.svg";
import { PercentContainer } from "./components/PercentContainer";
import { SellsInfoContainer } from "./components/SellsInfoContainer";
import { GraphContainer } from "./components/GraphContainer";

function App() {
  return (
    <div className="full-h page-pad">
      <div className="d-flex f-collum full-w full-h g-1x">
        <div className="d-flex g-1x full-w md-collum">
          <NpsContainer icon={iconScore} />
          <PercentContainer
            gradient="purple"
            title="Vendas Fechadas"
            expectedValue="100"
            reachedValue="70"
            percents="70"
          />
          <PercentContainer
            gradient="orange"
            percents="90"
            title="Meta mensal"
            expectedValue="R$ 70K"
            reachedValue="R$ 63K"
          />
        </div>
        <div className="bg-primary shadow b-round p-3x d-flex g-1x md-collum">
          <SellsInfoContainer />
          <GraphContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
