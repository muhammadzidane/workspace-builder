"use client";

import { useState } from "react";

import { Chair, Floor, Scene } from "@/app/_components";

type ModelItem = {
  id: number;
};

const Home = () => {
  const [dragging, setDragging] = useState(false);
  const [models, setModels] = useState<ModelItem[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const addModel = () => {
    setModels((prev) => [...prev, { id: idCounter }]);
    setIdCounter((prev) => prev + 1);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 flex flex-col gap-6 border-r">
        <button onClick={addModel}>Add Model</button>
      </div>

      {/* 3D Canvas */}
      <div className="flex-1">
        <Scene dragging={dragging}>
          {models.map((chair) => (
            <Chair key={chair.id} setDragging={setDragging} />
          ))}
          <Floor />
        </Scene>
      </div>
    </div>
  );
};

export default Home;
