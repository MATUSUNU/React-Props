import {Link} from "react-router-dom"

function App() {
  return (
    <div className="bg-light">
      <div className="container">

        <div className="row align-items-center py-3">
          <div className="col-12">
            <h1 className="text-center fw-bold display-4 m-0">
              My Custom React Components
            </h1>
          </div>
        </div>

        <div className="row align-items-center my-5">

          <div className="col-12 text-center fw-bold display-4 my-2">
            <Link to="/my-contact" className="btn btn-primary mb-3" >
              My Contact
            </Link>
          </div>

          <div className="col-12 text-center fw-bold display-4 my-2">
            <Link to="/map-filter-reduce" className="btn btn-primary mb-3" >
              My Map-Reduce-Filter
            </Link>
          </div>

          <div className="col-12 text-center fw-bold display-4 my-2">
            <Link to="/react-hooks" className="btn btn-primary mb-3" >
              My React-Hooks useState
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
