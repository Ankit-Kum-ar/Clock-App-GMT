import React, { useState, useEffect } from 'react';

// Utility to get IST time
const getISTTime = () => {
  const currentTime = new Date();
  const offset = currentTime.getTimezoneOffset() * 60000;
  const ISTTime = new Date(currentTime.getTime() + offset + 19800000); // 19800000ms is 5:30 hours
  return ISTTime;
};

const AnalogClock = ({ speed }) => {
  // Initialize the time to the current IST time minus 120 minutes
  const [time, setTime] = useState(new Date(getISTTime().getTime() - 120 * 60000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() + 1000 * speed)); // Adjust time by speed factor
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [speed]);

  const radius = 100;
  const center = radius;
  const size = radius * 2;

  const getHandAngle = (time, unit) => {
    const totalUnits = {
      seconds: 60,
      minutes: 60,
      hours: 12
    }[unit];
    const currentUnit = {
      seconds: time.getSeconds(),
      minutes: time.getMinutes(),
      hours: time.getHours() % 12
    }[unit];
    return 360 - (360 / totalUnits) * currentUnit; // Anticlockwise rotation
  };

  const hourAngle = getHandAngle(time, 'hours') + time.getMinutes() / 2;
  const minuteAngle = getHandAngle(time, 'minutes');
  const secondAngle = getHandAngle(time, 'seconds');

  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="flex flex-col items-center my-14">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mb-4">
        <circle cx={center} cy={center} r={radius} fill="white" stroke="black" strokeWidth="2" />
        
        {hours.map((hour, index) => {
          const angle = (index + 1) * 30 * (Math.PI / 180); // Convert degree to radians
          const x = center + (radius - 20) * Math.sin(angle);
          const y = center - (radius - 20) * Math.cos(angle);
          return (
            <text
              key={hour}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-bold"
            >
              {hour}
            </text>
          );
        })}

        <line
          x1={center}
          y1={center}
          x2={center + radius * 0.5 * Math.sin(hourAngle * (Math.PI / 180))}
          y2={center - radius * 0.5 * Math.cos(hourAngle * (Math.PI / 180))}
          stroke="black"
          strokeWidth="4"
        />
        <line
          x1={center}
          y1={center}
          x2={center + radius * 0.8 * Math.sin(minuteAngle * (Math.PI / 180))}
          y2={center - radius * 0.8 * Math.cos(minuteAngle * (Math.PI / 180))}
          stroke="black"
          strokeWidth="3"
        />
        <line
          x1={center}
          y1={center}
          x2={center + radius * 0.9 * Math.sin(secondAngle * (Math.PI / 180))}
          y2={center - radius * 0.9 * Math.cos(secondAngle * (Math.PI / 180))}
          stroke="red"
          strokeWidth="2"
        />
        <circle cx={center} cy={center} r="3" fill="black" />
      </svg>
      <p className="text-lg font-semibold">Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default AnalogClock;
