import { useState } from "react";

function ReactHooks() {

  var [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="p-4 text-center">
      <p>{count}</p>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success btn-lg" onClick={increase}>+</button>
        <button className="btn btn-danger btn-lg" onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default ReactHooks;
