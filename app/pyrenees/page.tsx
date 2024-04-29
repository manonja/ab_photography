import { Gallery } from "../components/gallery";
import { Photo as PhotoType } from "../types/photo";
import { Photo } from "../components/photo";
import {fetchPhotos} from "../lib/fetchPhotos";

export const runtime = "edge";


export async function Pyrenees() {
  // const photos = await getPhotos();
  try {
    const photos = await fetchPhotos(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pyrenees`)
    const landingImage = photos.map((photo: PhotoType) => photo.desktop_blob)[0];
      const thumbnails = await fetchPhotos(`${process.env.NEXT_PUBLIC_SITE_URL}/api/thumbnail/Pyrénées`)

      console.log('THUMBNAILS COMPONENTS:', thumbnails)
    return (
        <>
          <Photo photo={landingImage} priority />
          <Gallery images={photos} />
        </>
        )
  } catch {
    console.log("there was an error")
  }
}

export default Pyrenees;
