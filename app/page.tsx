import {SlideShow} from "./components/slideShow";
import { Photo } from "./types/photo";
import { getBaseUrl } from "./utils/getBaseUrl";

async function getPhotos() {
  const baseUrl = getBaseUrl()
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api`, { method: "GET" });

  const photos = await res.json();

  return photos;
}


export default async function Home() {
  const photos = await getPhotos();

  const slidesImages = photos.map((photo: Photo) => photo.desktop_blob);

  return <SlideShow images={slidesImages}/>;

}
