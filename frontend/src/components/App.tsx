import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRandomData = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Module 165 - MongoDB</h1>
      <h2>Data aléatoire </h2>
      {data.length > 0 && (
        <div>
          <h2>Random Data:</h2>
          <p>{getRandomData()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
