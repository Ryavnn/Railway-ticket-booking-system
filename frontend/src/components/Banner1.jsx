import train from "../assets/banner1-img.jpg"
function Banner1() {
  return (
    <div className="banner-1">
      <div className="main-cont">
        <img src={train} alt="Tarin-image" />
        <div className="banner-text">
          <h3 id="banner-text-1">Seamless Journeys, One Click Away!</h3>
          <p id="banner-text-2">
            Book your train tickets anytime, anywhere. Fast, secure, and
            hassle-free travel planning starts here.
          </p>
          <button className="banner-1-btn">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
