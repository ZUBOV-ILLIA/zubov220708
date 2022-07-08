import React, { useEffect } from "react";
import { ChartInt } from "../../react-app-env";

interface Props {
  activChart: ChartInt[] | null,
  setRandom: () => void,
}

export const Chart: React.FC<Props> = ({ activChart, setRandom }) => {
  useEffect(() => {
    setInterval(setRandom, 30000)
  }, []);

  console.log(activChart)

  return (
    <>
      <h1 className="title">SPEND TIME(SECONDS)</h1>

      {!!activChart && activChart.map(el => (
        <div
          className="container"
          key={el.name}
        >
          <span
            className="subtitle"
          >
            {el.name}
          </span>
          < div
            className="chart-container"
          >
            <div
              className="chart"
              style={{ width: `${el.time}%`}}
            >
              {el.time}
            </div>
          </div>
        </div>
      ))}

      < button
        type="button"
        onClick={setRandom}
      >
        set random
      </button>
    </>
  );
}