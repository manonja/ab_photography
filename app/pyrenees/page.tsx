import {Gallery} from "../components/gallery";
import { Photo as PhotoType } from "../types/photo";
import { Photo } from "../components/photo";

import prisma from '../../prisma/client';
import { getProjectId } from "../utils/getProjectId";


// async function getPhotos() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pyrenees`, {method: 'GET'})  
//   const photos = await res.json()
 
//   return photos
// }

export async function Pyrenees() {

  const projectId = await getProjectId("Pyrénées");

  const photos = await prisma.photo.findMany({
      where: {
        projectId: projectId,
      },
    });

  const landingImage = photos.map((photo: PhotoType) => photo.desktop_blob)[5];

  return (
      <>
      <Photo photo={landingImage} priority/>
      <Gallery images={photos}/>
      </>

  );
}

export default Pyrenees;
