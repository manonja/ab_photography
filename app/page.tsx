import {SlideShow} from "./components/slideShow";
import { list } from "@vercel/blob";

export default async function Home() {

  async function getSlidesImages() {
    const slideImages = await list({prefix: "slide"})
    return slideImages;  
}

  const images = await getSlidesImages();

return <SlideShow images={images}/>;
}
