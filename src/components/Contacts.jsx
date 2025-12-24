import Card from "./Card"
import contacts from "../contacts"
import Avatar from "./Avatar"


// function createContact(contact) {
//   return (
//     <Card
//       id={contact.id}
//       key={contact.id}
//       name={contact.name}
//       srcImg={contact.imgURL}
//       tel={contact.phone}
//       email={contact.email}
//     />
//   );
// };

function Contacts() {
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-12">
          <h1 className="text-center fw-bold display-4 m-0">My Contacts</h1>
        </div>
      </div>

      <Avatar imgURL="https://picsum.photos/id/237/250" />

      <div className="row justify-content-center">

        {/* {contacts.map(createContact)} */}

        {contacts.map(contact => (
          <Card
            id={contact.id}
            key={contact.id}
            name={contact.name}
            srcImg={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        ))}

      </div>
    </div>
  );
}

export default Contacts;
