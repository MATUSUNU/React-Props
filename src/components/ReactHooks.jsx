import { useState } from "react";
import cars from "../cars";
import CustomUseState, {useCustom} from "./CustomUseState";

function ReactHooks() {

  var [count, setCount] = useState(0);
  var [isMouseOver, setMouseOver] = useState(false);

  // setInterval(getTime,1000)
  var current_time = new Date().toLocaleTimeString()
  var [time, setTime] = useState(current_time);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }


  // Destructuring
  var [honda, tesla] = cars;
  var {model: modelCar,coloursByPopularity,speedStats: {topSpeed, zeroToSixty}} = honda;
  // console.log(modelCar);
  // console.log(coloursByPopularity);
  // console.log(topSpeed,",",zeroToSixty);

  // Custom useState
  useCustom(honda);
  const [model, speedCar] = useCustom(honda);
  console.log(model);
  speedCar();

  function MouseOver() {
    setMouseOver(true);
  }

  function MouseOut() {
    setMouseOver(false);
  }


  return (
    <div className="container p-4 text-center">
      <div className="row align-items-center mt-5 mb-3">
        <div className="col-12">
          <h1 className="text-center fw-bold display-4 m-0">My React Hooks</h1>
        </div>
      </div>

      <div className="row align-items-center mt-4 mb-3">
        <div className="col-12">
          <h1 className="text-center display-4 m-0">1. useState</h1>
        </div>
      </div>

      <p>{count}</p>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success btn-lg" onClick={increase}>+</button>
        <button className="btn btn-danger btn-lg" onClick={decrease}>-</button>
      </div>

      <p className="mt-5">{time}</p>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-primary btn-lg" onClick={getTime}>Get Time</button>
      </div>

      <div className="row align-items-center mt-5 mb-3">
        <div className="col-12">
          <h1 className="text-center display-4 m-0">2. destructuring</h1>
        </div>
      </div>

      <p
        style={{color: isMouseOver ? "blue" : "black" }}
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
      >
        Model of the Car: "{model}"
      </p>

    </div>
  )
}

export default ReactHooks;
