import {SlideShow} from "./components/slideShow";
import { Photo } from "./types/photo";
import { getProjectId } from "./utils/getProjectId";

import prisma from '../prisma/client';

export default async function Home() {

  const projectId = await getProjectId("7 Rad")

  const photos = await prisma.photo.findMany({
      where: {
        projectId: projectId,
      },
    });

  const slidesImages = photos.map((photo: Photo) => photo.desktop_blob);

  return <SlideShow images={slidesImages}/>;

}
