import {Photo} from "../components/photo";
import {Gallery} from "../components/gallery";
import { Photo as PhotoType } from "../types/photo";
import { getBaseUrl } from "../utils/getBaseUrl";


async function getPhotos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL}/api/pyrenees`, {method: 'GET'})  
  const photos = await res.json()
 
  return photos
}

export async function Pyrenees() {
  const photos = await getPhotos()

  const landingImage = photos.map((photo: PhotoType) => photo.desktop_blob)[5];

  return (
      <>
      <Photo photo={landingImage} priority/>
      <Gallery images={photos}/>
      </>

  );
}

export default Pyrenees;
