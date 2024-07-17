import React from 'react';

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="flex flex-col items-center w-full my-11">
      <label className="font-semibold mb-2">Clock Speed: {speed}x</label>
      <input
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="w-5/12 p-2 accent-orange-600 cursor-pointer"
      />
    </div>
  );
};

export default SpeedSlider;
