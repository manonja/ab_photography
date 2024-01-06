import {Photo} from "../components/photo";
import rad1 from "../../public/7rad/abossenbroek-7rad-00008.webp";
import rad2 from "../../public/7rad/abossenbroek-7rad-00001.webp";
import rad3 from "../../public/7rad/abossenbroek-7rad-00002.webp";
import rad4 from "../../public/7rad/abossenbroek-7rad-00003.webp";
import rad5 from "../../public/7rad/abossenbroek-7rad-00005.webp";
import rad6 from "../../public/7rad/abossenbroek-7rad-00006.webp";
import rad7 from "../../public/7rad/abossenbroek-7rad-00007.webp";
import rad8 from "../../public/7rad/abossenbroek-7rad-00004.webp";

import {Description} from "../components/description";
import { Gallery } from "../components/gallery";

export default function SevenRad() {
  const text = "The Netherlands has the highest level of artificial light at night per square kilometer of any OECD country. In 2020, satellites measured an average radiance (rad) in the Netherlands of 7 rad with a maximum of 10,596 rad. In perspective, New York state, USA has an average radiance of 2 rad and a maximum of 411 rad.Artificial light at night affects both humans and animals. Our melatonine hormone levels change, increasing the risk of cancer. As for animals, evolution made them trust the brightness of the day to determine the time of the day. Now, with bright skies at night, they are blinded.Through this work Anton Bossenbroek investigates the surreal landscapes that artificial light at night produces."
  const images = [rad1, rad6, rad3, rad8, rad5, rad2, rad7, rad4]
;  return (
      <div className="container sm:my-12">
        <Photo photo={rad1}/>
        <Gallery images={images}/>
        <Description text={text}/>
      </div>
    )
}




