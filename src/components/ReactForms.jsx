import { useState } from "react";


function ReactForms() {
  // -------------------------------------- Part 1 [Brofessional/Beginner] --------------------------------------
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [heading, setHeading] = useState("");

  // function handleFirstChange(event) {
  //   // console.log(event.target.value);
  //   // console.log(event.target.placeholder);
  //   // console.log(event.target.type);
  //   setFname(event.target.value);
  // }

  // function handleSecondChange(event) {
  //   setLname(event.target.value)
  // }

  // function handleClick(event) {
  //   setHeading(fname+" "+lname);

  //   event.preventDefault();
  // }

  // -------------------------------------- Part 2 --------------------------------------
  // const [fullName, setFullName] = useState({
  //   fName: "",
  //   lName: ""
  // })

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   const name = event.target.name;

  //   if (name === "fname") {
  //     setFullName({fName: newValue});
  //   } else if (name === "lname") {
  //     setFullName({lName: newValue});
  //   }
  // }

  // -------------------------------------- Part 3 [Prafessional/Intermediate] --------------------------------------
  // const [fullName, setFullName] = useState({
  //   fName: "",
  //   lName: "",
  //   sName: ""
  // })

  // function handleChange(event) {
  //   const {name, value} = event.target;

  //   setFullName((prev) => {
  //     if (name === "fname") {
  //       return {
  //         fName: value,
  //         lName: prev.lName,
  //         sName: prev.sName
  //       }
  //     } else if (name === "lname") {
  //       return {
  //         fName: prev.fName,
  //         lName: value,
  //         sName: prev.sName,
  //       }
  //     } else if (name === "sname") {
  //       return {
  //         fName: prev.fName,
  //         lName: prev.lName,
  //         sName: value
  //       }
  //     }
  //   })
  // }

  // -------------------------------------- Use `Spread Syntax` to make it short [Professional] --------------------------------------
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    sName: ""
  })

  function handleChange(event) {
    // Destructuring
    const {name, value} = event.target;

    // Spread Operator
    setFullName((prev) => {
      console.log(prev)
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center mt-3">
      <div className="form-card p-4 text-center">
        <h1 className="mb-4">Hello {fullName.fName} {fullName.lName} {fullName.sName}</h1>
        <input
          onChange={handleChange}
          type="text"
          name="fName"
          className="form-control mb-3"
          placeholder="What's your first name?"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          type="text"
          name="lName"
          className="form-control mb-3"
          placeholder="What's your last name?"
          value={fullName.lName}
        />
        <input
          onChange={handleChange}
          type="text"
          name="sName"
          className="form-control mb-3"
          placeholder="What's your sur name?"
          value={fullName.sName}
        />
        <button className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  )
}

export default ReactForms;
