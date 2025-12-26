import { useState } from "react";


function ReactForms() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container d-flex justify-content-center align-items-center mt-3">
      <div className="form-card p-4 text-center">
        <h1 className="mb-4">Hello {heading}</h1>
        <input
          onChange={handleChange}
          type="text"
          className="form-control mb-3"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleClick} className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  )
}

export default ReactForms;
