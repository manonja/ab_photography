import { getBaseUrl } from "./utils/getBaseUrl";
import {SlideShow} from "./components/slideShow";
import { Photo } from "./types/photo";


async function getPhotos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL}/api`, { method: "GET" });

  const photos = await res.json();

  return photos;
}


export default async function Home() {
  const photos = await getPhotos();

  const slidesImages = photos.map((photo: Photo) => photo.desktop_blob);

  return <SlideShow images={slidesImages}/>;
}
