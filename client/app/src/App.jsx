import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [flowers, setFlowers] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState(0);

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/flowers/");
      const data = await response.json();
      setFlowers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addFlower = async () => {
    const flowerData = {
      title,
      release_year: releaseYear,
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/flowers/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(flowerData),
        }
      );
      const data = await response.json();
      // preious array + current array
      setFlowers((prev) => [...prev, data])
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Flower website</h1>
      <div>
        <input
          type="text"
          placeholder="Flower title ..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Date ..."
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button onClick={addFlower}>Add Flower</button>
      </div>
      {flowers.map((flowerItem, index) => (
        <>
          <div key={index}>
            <p>Title: {flowerItem.title}</p>
            <p>Release year: {flowerItem.release_year}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default App;
