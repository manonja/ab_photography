import {Photo} from "../components/photo";
import rad1 from "../../public/7rad/7rad1.jpg";
import {Paragraph} from "../components/paragraph";

export default function SevenRad() {
  const text = "The Netherlands has the highest level of artificial light at night per square kilometer of any OECD country. In 2020, satellites measured an average radiance (rad) in the Netherlands of 7 rad with a maximum of 10,596 rad. In perspective, New York state, USA has an average radiance of 2 rad and a maximum of 411 rad.Artificial light at night affects both humans and animals. Our melatonine hormone levels change, increasing the risk of cancer. As for animals, evolution made them trust the brightness of the day to determine the time of the day. Now, with bright skies at night, they are blinded.Through this work Anton Bossenbroek investigates the surreal landscapes that artificial light at night produces."
  return (
      <>
        <Photo photo={rad1} withDivider/>
        <Paragraph text={text}/>
      </>
  )
}




