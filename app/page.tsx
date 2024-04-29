import { SlideShow } from "./components/slideShow";
import { Photo } from "./types/photo";
import {fetchPhotos} from './lib/fetchPhotos';


export default async function Home() {
  try {
    const photos = await fetchPhotos(`${process.env.NEXT_PUBLIC_SITE_URL}/api`)
    const slidesImages = photos.map((photo: Photo) => photo.desktop_blob);
    console.log(slidesImages)

    return <SlideShow images={slidesImages} />;


  }
  catch (error: unknown) {
    // Handle any errors that occur during fetching
    console.log("there was an error", error)
  }

  // return (
  //     <div>hello</div>
  // )




  // return <SlideShow images={slidesImages} />;


}
