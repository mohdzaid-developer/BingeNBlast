import "./Refund.scss";

const Refund = () => {
  return (
    <section className="refund">

      <div className="blue-blob"></div>
      <div className="red-blob"></div>
      <h1>Refund Policy</h1>
      <li>
        For the confirmation of your booking we charge an advance payment of
        20%. It will be fully refunded if you cancel 72 hours before your
        booking slot.
      </li>
      <div className="cards">
        <div className="card">
          <h2>Cancellation Time</h2>
          <p>72 hours or more prior to slot time</p>
          <p>Less than 72 hours before slot time</p>
        </div>
        <div className="card">
          <h2>Cancellation Fee</h2>
          <p>Free Cancellation (100% refund)</p>
          <p>100% of booking value</p>
        </div>
      </div>
      <li>
        If you need to cancel your booking, please contact us via WhatsApp
        (9392005252) as soon as possible so we can arrange your refund. We will
        process your refund within 7 business days of receiving your
        cancellation request.
      </li>
      <li>
        If you have any questions or concerns about our refund policy, feel free
        to contact us. We are always happy to help!
      </li>
      <li>
        No refund is possible in case of non-appearance at the booked date.
      </li>
      <li>
        If you decide to shorten your booking for the confirmed slot, incase if
        you leave early or arrive late, no refund for the booking is applicable
      </li>
    </section>
  );
};

export default Refund;
