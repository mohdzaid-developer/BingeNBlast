import "./BookEvent.scss";

//Images
import bookEventImg from "../../../../../Assets/bookEventImg.png"

const BookEvent = () => {
  return (
    <section className="book-event">
      <div className="content">
        <h2>Book your event from anywhere</h2>
        <p>
          Now, enjoy that experience on the go with the Harkins Theatres App!
          It’s the best way to view showtimes, buy tickets, watch trailers and
          find out about the latest movie events happening at Harkins Theatres.
        </p>
        <ul>
          <li>
            Look up movies and showtimes and share them with friends and family.
          </li>
          <li>
            Be the first to find out about the latest Harkins events and
            promotions
          </li>
          <li>Use easy-to-navigate icon indicators for movie features.</li>
        </ul>
      </div>
      <img src={bookEventImg} alt="" />
    </section>
  );
};

export default BookEvent;
