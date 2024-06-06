import { useEffect, useState } from "react";
import { Student } from "../types";

function App(): JSX.Element {
  const [data, setData] = useState<Student[]>([]);
  const [student, setStudent] = useState<Student>(); 

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/students");
      const jsonData = await response.json();
      setData(jsonData);
      getRandomData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRandomData = (): void => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setStudent(data[randomIndex]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Module 165 - MongoDB</h1>
      <h2>Data aléatoire </h2>
      {data.length > 0 && (
        <div>
          <h2>Random Data:</h2>
          <p>{student?.name}</p>
          <p>{student?.lastName}</p>
          <p>{student?.class}</p>
          <p>{student?.dateOfBirth.toLocaleDateString()}</p>
          <p>{student?.specificiProvisions.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
