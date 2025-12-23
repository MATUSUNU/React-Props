import Avatar from "./Avatar"
import Detail from "./Detail"

function Card(props) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="contact-card shadow">
        <div className="card-top">
          {props.id}
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.srcImg} />
        </div>
        <div className="card-bottom">
          <Detail detailInfo={props.tel} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  )
}

export default Card;
