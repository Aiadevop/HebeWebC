import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/app.css";

const images = [
  <img alt="niños haciendo taekwondo" height="300" src="../src/ui/img/tae1.jpg"/>,
  <iframe alt="exhibicion tricking" width="100%" height="750" src={"https://www.youtube.com/embed/wnq7FGsM6dg" } />,
  <iframe alt="resumen año Hebe" width="100%" height="750" src={"https://www.youtube.com/embed/vWfZdgewsQE" } />,
  <video alt="exhibicion niño" width="100%" controls src="../src/ui/videos/VIDtaeda.mp4" />
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];
 
export function Slide() {
  return (
    <div className="boxslide">
      <Carousel useKeyboardArrows={true} showStatus={false} showThumbs={false} dynamicHeight={true}>
        {images.map((URL) => (
          <div className="slide">
            {URL}
            {/* <iframe width="100%" height="700"  src={URL} key={index}/> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

