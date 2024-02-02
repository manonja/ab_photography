import { list, head } from '@vercel/blob';

import {Photo} from "../components/photo";


export async function Pyrenees() {
  async function getMainImage() {
    const mainImage = await head("https://dse0fs1ooxwlfxjh.public.blob.vercel-storage.com/fullscreen/pyr/pyr-101-3VP2N9l0QygGo8aLrwvyBwSUyyKXqL.webp")
    return mainImage;
  }

const mainImage = await getMainImage();


  return (
      <>
      <Photo photo={mainImage} priority/>
      </>

  );
}

export default Pyrenees;