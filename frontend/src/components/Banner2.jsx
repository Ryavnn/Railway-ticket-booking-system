import bannerLogo from "../assets/banner-logo.png"
function Banner2() {
  return (
    <>
      <div className="banner2-cont">
        <div className="banner2">
          <div className="banner-2-cont">
            <div className="banner-2-text">
              <h2>Trusted seller and distributor for hundreds of operators</h2>
            </div>
            <div className="banner-2-img">
              <img src={bannerLogo} alt="logo"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner2;
