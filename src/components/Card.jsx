
function Card(props) {
  return (
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="contact-card shadow">
        <div class="card-top">
          <h2 class="name">{props.name}</h2>
          <img class="avatar" src={props.srcImg} alt="jack" />
        </div>
        <div class="card-bottom">
          <p class="info">{props.tel}</p>
          <p class="info">{props.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
