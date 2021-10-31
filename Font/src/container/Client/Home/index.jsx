import { useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [state, setState] = useState({ hits: [] });
  const mapFood = async () => {
    await axios
      .get("http://localhost:5000/api/v1/food/getListFoodbyName")
      .then((res) => console.log(res.data));
    console.log(state);
  };
  return (
    <div>
      123
      <button onClick={mapFood}>Click</button>
    </div>
  );
}
