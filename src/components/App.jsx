import Card from "./Card"
import contact from "../contacts"
import Avatar from "./Avatar"

function App() {
  return (
    <div className="bg-light">
      <div className="container">

        <div class="row align-items-center my-5">
          <div class="col-12">
            <h1 class="text-center fw-bold display-4 m-0">My Contacts</h1>
          </div>
        </div>

        <Avatar imgURL="https://picsum.photos/id/237/250" />

        <div className="row justify-content-center">
          <Card
            name={contact[0].name}
            srcImg={contact[0].imgURL}
            tel={contact[0].phone}
            email={contact[0].email}
          />

          <Card
            name={contact[1].name}
            srcImg={contact[1].imgURL}
            tel={contact[1].phone}
            email={contact[1].email}
          />

          <Card
            name={contact[2].name}
            srcImg={contact[2].imgURL}
            tel={contact[2].phone}
            email={contact[2].email}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
