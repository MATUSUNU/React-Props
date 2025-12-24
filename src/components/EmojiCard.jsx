import Detail from "./Detail"

function EmojiCard(props) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="contact-card shadow">
        <div className="card-top d-flex align-items-center justify-content-center">
          <p className="mb-0 fs-2">{props.emoji}</p>
          <h2 className="name">{props.name}</h2>
        </div>
        <div className="card-bottom">
          <Detail detailInfo={props.description} />
        </div>
      </div>
    </div>
  )
}

export default EmojiCard;
