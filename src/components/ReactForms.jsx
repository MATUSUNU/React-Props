import { useState } from "react";


function ReactForms() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [heading, setHeading] = useState("");

  function handleFirstChange(event) {
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setFname(event.target.value);
  }

  function handleSecondChange(event) {
    setLname(event.target.value)
  }

  function handleClick(event) {
    setHeading(fname+" "+lname);

    event.preventDefault();
  }

  return (
    <div className="container d-flex justify-content-center align-items-center mt-3">
      <div className="form-card p-4 text-center">
        <h1 className="mb-4">Hello {fname} {lname}</h1>
        <input
          onChange={handleFirstChange}
          type="text"
          className="form-control mb-3"
          placeholder="What's your first name?"
          value={fname}
        />
        <input
          onChange={handleSecondChange}
          type="text"
          className="form-control mb-3"
          placeholder="What's your last name?"
          value={lname}
        />
        <button onClick={handleClick} className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  )
}

export default ReactForms;
