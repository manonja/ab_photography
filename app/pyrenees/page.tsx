import { list, head } from '@vercel/blob';

import {Photo} from "../components/photo";
import {Gallery} from "../components/gallery";


export async function Pyrenees() {
  async function getMainImage() {
    const mainImage = await head("https://dse0fs1ooxwlfxjh.public.blob.vercel-storage.com/pyr-120-rGUwO6v9E8pRxD3Qwp52OXERoP3hXC.webp")
    return mainImage;
  }
  async function getPyrImages() {
    const pyrImages = await list({prefix: "pyr"})
    return pyrImages;  
}

const mainImage = await getMainImage();
const pyrImages = await getPyrImages();


  return (
      <>
      <Photo photo={mainImage} withDivider/>
      <Gallery images={pyrImages}/>
      </>

  );
}

export default Pyrenees;