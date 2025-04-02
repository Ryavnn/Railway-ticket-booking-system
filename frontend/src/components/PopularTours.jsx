
import TourCards from "./TourCards";


function PopularTours() {

  return (
    <>
      <div className="popular-tours-cont">
        <h2>Popular Tours</h2>
        <div className="popular-tours">
          <TourCards/>
        </div>
      </div>
    </>
  );
}

export default PopularTours;
