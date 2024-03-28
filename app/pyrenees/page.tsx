import { Gallery } from "../components/gallery";
import { Photo as PhotoType } from "../types/photo";
import { Photo } from "../components/photo";

// async function getPhotos() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pyrenees`, {
//     method: "GET",
//   });
//   return await res.json();
// }

export async function Pyrenees() {
  // const photos = await getPhotos();

  // const landingImage = photos.map((photo: PhotoType) => photo.desktop_blob)[5];

  return (
    <>
      {/*<Photo photo={landingImage} priority />*/}
      {/*<Gallery images={photos} />*/}
      <div>Hello</div>
    </>
  );
}

export default Pyrenees;
