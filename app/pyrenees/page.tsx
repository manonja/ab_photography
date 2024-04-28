import { Gallery } from "../components/gallery";
import { Photo as PhotoType } from "../types/photo";
import { Photo } from "../components/photo";

export const runtime = "edge";

async function getPhotos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pyrenees`, {
    method: "GET",
  });
  return await res.json();
}

export async function Pyrenees() {
  const photos = await getPhotos();

  const landingImage = photos.map((photo: PhotoType) => photo.desktop_blob)[0];

  return (
    <>
      <Photo photo={landingImage} priority />
      <Gallery images={photos} />
    </>
  );
}

export default Pyrenees;
