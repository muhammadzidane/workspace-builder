"use client";

import { useState } from "react";

import { Model, Room, Scene } from "@/app/_components";

const Home = () => {
  const [dragging, setDragging] = useState(false);

  const addModel = () => {
    //
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 flex flex-col gap-6 border-r">
        <button onClick={addModel}>Add Model</button>

        <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 shadow-sm">
          <p className="font-semibold text-slate-900">Controls</p>
          <p>• Click and drag to move models</p>
          <p>• Hold Shift, Ctrl, or Alt + drag to rotate models on the floor</p>
          <p>• Hover over a model and scroll to fine-tune rotation</p>
          <p>• Release the mouse button to apply placement</p>
        </div>
      </div>

      <div className="flex-1">
        <Scene dragging={dragging}>
          <Model
            modelPath="/models/chair-1.glb"
            scale={0.003}
            setDragging={setDragging}
          />
          <Model
            modelPath="/models/desk-1.glb"
            position={[1, 0, 0]}
            scale={7.5}
            setDragging={setDragging}
          />
          <Room />
        </Scene>
      </div>
    </div>
  );
};

export default Home;
