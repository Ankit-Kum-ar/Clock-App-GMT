import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import AnalogClock from '../components/AnalogClock';
import SpeedSlider from '../components/SpeedSlider';
import { useLocation, useNavigate } from 'react-router-dom';
import ShareButton from '../components/ShareButton';
const Browser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [speed, setSpeed] = useState(1); // Default speed is 1x

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const speedParam = parseFloat(params.get('speed'));
    if (speedParam) {
      setSpeed(speedParam);
    }
  }, [location.search]);

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    navigate(`?speed=${newSpeed}`);
  };

  return (
    <div>
        <Header/>
        <AnalogClock speed={speed} />
        <SpeedSlider speed={speed} setSpeed={handleSpeedChange} />
        <ShareButton speed={speed} />
    </div>
  )
}

export default Browser
