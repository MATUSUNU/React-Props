import Avatar from "./Avatar"
import Detail from "./Detail"

function Card(props) {
  return (
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="contact-card shadow">
        <div class="card-top">
          <h2 class="name">{props.name}</h2>
          <Avatar imgURL={props.srcImg} />
        </div>
        <div class="card-bottom">
          <Detail detailInfo={props.tel} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  )
}

export default Card;
