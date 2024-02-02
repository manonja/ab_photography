import { list, head } from "@vercel/blob";

import {Photo} from "../components/photo";
import { Description } from "../components/description";
import { Gallery } from "../components/gallery";

import Link from "next/link";

export default async function SevenRad() {
  async function getMainImage() {
    const mainImage = await head("https://dse0fs1ooxwlfxjh.public.blob.vercel-storage.com/fullscreen/7rad/7rad-2023-11-04%2021.18.51CF002270-wuD67C1ihn8Y9aXAh5d8BljEa5OCqh.webp")
    return mainImage;
  }


const mainImage = await getMainImage();

  const text1 = "The Netherlands has the highest level of artificial light at night per square kilometer of any OECD country. In 2020, satellites measured an average radiance (rad) in the Netherlands of 7 rad with a maximum of 10,596 rad. In perspective, New York state, USA has an average radiance of 2 rad and a maximum of 411 rad."
  const text2 = "Artificial light at night affects both humans and animals. Our melatonine hormone levels change, increasing the risk of cancer. As for animals, evolution made them trust the brightness of the day to determine the time of the day. Now, with bright skies at night, they are blinded.Through this work Anton Bossenbroek investigates the surreal landscapes that artificial light at night produces."
  const text3 = "Through this work I investigates the surreal landscapes that artificial light at night produces."

  return (
      <>
        <Photo photo={mainImage} priority/>
        <Description text={text1}/>  
        <Description text={text2}/>      
        <Description text={text3}/>   
        <div className="flex flex-col w-full items-end sm:pt-4 text-xs text-gray-300">Ressources:</div>
      
        <Link  
          className="flex flex-col w-full items-end sm:pt-4 text-xs text-gray-300  hover:border-b"
          href="https://github.com/pyalanysis/pyalanysis"> 
          Python Package 
        </Link>
        <Link  
          className="flex flex-col w-full items-end sm:pt-2 text-xs text-gray-300 hover:border-b"
          href="https://www.magnumphotos.com/shop/11-photographic-stories-from-magnums-mentees/"> 
          Magnum Article 
        </Link>        
      </>
  )
}




