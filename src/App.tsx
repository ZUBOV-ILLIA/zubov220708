import React, { useEffect, useState } from 'react';
import { Chart } from './components/chart';
import './App.css';
import { ChartInt } from './react-app-env';
import apiObj from './api/input.json'



const App: React.FC = () => {
  const [activChart, setActivChart] = useState<ChartInt[] | null>(null);

  const setRandom = () => {
    if (!!activChart) {
      setActivChart([...activChart].map(el => {
        return {
          ...el,
          time: Math.floor(Math.random() * 100) + 1,
        }
      }));
    }
  }

  useEffect(() => {
    setActivChart(apiObj);
  }, []);

  return (
    <div className="App">
      {!!activChart && (
        <Chart
          activChart={activChart}
          setRandom={setRandom}
        />
      )}
    </div>
  );
}

export default App;
