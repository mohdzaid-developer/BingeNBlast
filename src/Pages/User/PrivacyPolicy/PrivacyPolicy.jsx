import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <div className="blue-blob"></div>
      <div className="red-blob"></div>
      <h1>Privacy Policy</h1>
      <ul>
        <li className="special-list">
          At Binge delight, we collect user information to share booking details
          after the booking is confirmed. Personally identifiable information
          may include.
          <ol>
            <li>Email address</li>
            <li>Name</li>
            <li>Phone number</li>
          </ol>
        </li>
        <li>
          We respect the privacy of our customers and will not share your
          personal information with others.
        </li>
        <li>
          We use your data to provide and improve Service. By using Service, you
          agree to the collection and use of information in accordance with this
          policy.
        </li>
        <li>
          Based on your Interest, We will request us for promotional information
          but will not spam your inboxes with newsletters.
        </li>
        <li>
          We will not use cookies and similar tracking technologies to track the
          activity on our Service and we don't hold any information.
        </li>
      </ul>
    </section>
  );
};

export default PrivacyPolicy;
