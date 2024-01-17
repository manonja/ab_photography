import {SlideShow} from "./components/slideShow";

import pyr20 from "../public/pyr/abossenbroek-pyrenees-00005.webp";
import portrait1 from "../public/slides/portrait-1.jpg";
import landscape1 from "../public/slides/landscape-1.jpg";
import miami1 from "../public/slides/miami-1.jpg";
import rad1 from "../public/7rad/abossenbroek-7rad-00008.webp";

export default function Home() {
  const images = [pyr20, portrait1, landscape1, rad1, miami1]
  return <SlideShow images={images}/>
  ;
}
