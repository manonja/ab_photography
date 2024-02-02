import {Photo} from "./components/photo";
import { list, head } from "@vercel/blob";

export default async function Home() {

  async function getMainImage() {
    const mainImage = await head("https://dse0fs1ooxwlfxjh.public.blob.vercel-storage.com/fullscreen/7rad/7rad-2023-11-04%2021.18.51CF002270-wuD67C1ihn8Y9aXAh5d8BljEa5OCqh.webp")
    return mainImage;
  }

const mainImage = await getMainImage();


return <Photo photo={mainImage}/>;
}
