import React, { useState, useEffect } from "react";

const Button = ({ children, className, onClick, ariaLabel }) => {
  return (
    <button
      className={`m-1 btn ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ width: "100px", maxWidth: "200px" }}
    >
      {children}
    </button>
  );
};

const App = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const audioRef = React.createRef();

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setIsActive(false);
          playAlertSound();
          resetTimer();
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    playAlertSound();
  };

  const playAlertSound = () => {
    audioRef.current.play();
  };
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <div
        style={{ height: "300px", width: "300px" }}
        className="bg-info pt-5 rounded-circle d-flex flex-column justify-content-center align-items-center"
      >
        <h3>Pomodoro Timer</h3>

        <p className="fs-1 fw-bold text-white" aria-label="Remaining Time">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <Button
          className="btn-info"
          onClick={toggleTimer}
          ariaLabel={isActive ? "Pause Timer" : "Start Timer"}
        >
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button
          className="btn-danger"
          onClick={resetTimer}
          ariaLabel="Reset Timer"
        >
          Reset
        </Button>
      </div>
      {/* sound */}
      <audio ref={audioRef} src="/music\clock_alert2.mp3" />
    </div>
  );
};

export default App;
