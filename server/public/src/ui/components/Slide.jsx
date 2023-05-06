import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/cartel.css";

const images = [
  <img alt="funcore" height='100' src="../src/ui/img/slide/funcoreCut.png" />,
  <img alt="combate" src="../src/ui/img/slide/combateCut.png" />,
  <img alt="taekwondo" height='100' src="../src/ui/img/slide/taekwondoCut.png" />,
  <img alt="tricking" height='100' src="../src/ui/img/slide/trickingCut.png" />,

  // <iframe alt="exhibicion tricking" width="100%" height="750" src={"https://www.youtube.com/embed/wnq7FGsM6dg" } />,
  //  <iframe alt="resumen año Hebe" width="100%" height="750" src={"https://www.youtube.com/embed/vWfZdgewsQE" } />,
  // <video alt="exhibicion niño" width="100%" controls src="../src/ui/videos/VIDtaeda.mp4" /> 
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];

export function Slide() {
  return (
    <div className="boxslide">
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={true}
        autoPlay={true}
        transitionTime={1000}
        infiniteLoop={true}    
        passive={true} >
        {images.map((URL, index) => (

          <div className="slide" key={index}>
            {URL}
            {/* <iframe width="100%" height="700"  src={URL} key={index}/> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

