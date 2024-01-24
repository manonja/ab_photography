import { list, head } from "@vercel/blob";

import {Photo} from "../components/photo";
import { Description } from "../components/description";
import { Gallery } from "../components/gallery";

import Link from "next/link";

export default async function SevenRad() {
  async function getMainImage() {
    const mainImage = await head("https://dse0fs1ooxwlfxjh.public.blob.vercel-storage.com/7rad-2023-12-01%2005.56.12CF003592-hajKs83BhEX8gTM86o5esufphq1VCR.webp")
    return mainImage;
  }
  async function get7RadImages() {
    const sevenRadImages = await list({prefix: "7rad"})
    return sevenRadImages;  
}

const mainImage = await getMainImage();
const images = await get7RadImages();

  const text1 = "The Netherlands has the highest level of artificial light at night per square kilometer of any OECD country. In 2020, satellites measured an average radiance (rad) in the Netherlands of 7 rad with a maximum of 10,596 rad. In perspective, New York state, USA has an average radiance of 2 rad and a maximum of 411 rad."
  const text2 = "Artificial light at night affects both humans and animals. Our melatonine hormone levels change, increasing the risk of cancer. As for animals, evolution made them trust the brightness of the day to determine the time of the day. Now, with bright skies at night, they are blinded.Through this work Anton Bossenbroek investigates the surreal landscapes that artificial light at night produces."
  const text3 = "Through this work I investigates the surreal landscapes that artificial light at night produces."

  return (
      <>
        <Photo photo={mainImage} priority/>
        <Gallery images={images}/>
        <Description text={text1}/>  
        <Description text={text2}/>      
        <Description text={text3} links/>   
      </>
  )
}




