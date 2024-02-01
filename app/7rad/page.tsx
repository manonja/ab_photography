import { Description } from "../components/description";
import { Gallery } from "../components/gallery";
import { Photo as PhotoType } from "../types/photo";
import { Photo } from "../components/photo";

async function getPhotos() {
  const res = await fetch(`${process.env.URL}/api/7rad`, { method: "GET" });

  const photos = await res.json();

  return photos;
}

export default async function SevenRad() {
  const photos = await getPhotos();

  const galleryBlobs = photos.map((photo: PhotoType) => photo.gallery_blob);
  const landingImage = photos.map((photo: PhotoType) => photo.desktop_blob)[6];

  const text1 =
    "The Netherlands has the highest level of artificial light at night per square kilometer of any OECD country. In 2020, satellites measured an average radiance (rad) in the Netherlands of 7 rad with a maximum of 10,596 rad. In perspective, New York state, USA has an average radiance of 2 rad and a maximum of 411 rad.";
  const text2 =
    "Artificial light at night affects both humans and animals. Our melatonine hormone levels change, increasing the risk of cancer. As for animals, evolution made them trust the brightness of the day to determine the time of the day. Now, with bright skies at night, they are blinded.Through this work Anton Bossenbroek investigates the surreal landscapes that artificial light at night produces.";
  const text3 =
    "Through this work I investigates the surreal landscapes that artificial light at night produces.";

  return (
    <>
      <Photo photo={landingImage} priority />
      <Gallery images={galleryBlobs} />
      <Description text={text1} />
      <Description text={text2} />
      <Description text={text3} links />
    </>
  );
}
