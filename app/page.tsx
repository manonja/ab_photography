import { SlideShow } from "./components/slideShow";
import { Photo } from "./types/photo";

async function getPhotos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api`, {
    method: "GET",
  });

  return await res.json();
}

export default async function Home() {
  const photos = await getPhotos();

  const slidesImages = photos.map((photo: Photo) => photo.desktop_blob);

  return <SlideShow images={slidesImages} />;
}
