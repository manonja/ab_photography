import { Description } from "../components/description";
import { Gallery } from "../components/gallery";
import { Photo as PhotoType } from "../types/photo";
import { Photo } from "../components/photo";
import {fetchPhotos} from "../lib/fetchPhotos";

export const runtime = "edge";

export default async function SevenRad() {
  const text1 =
    "With 7 Radiance (RAD), the Netherlands is the OECD country with the highest average artificial light pollution. Rad, or radiance, is the unit of measurement for light pollution measured by satellite. I visited all 13 regions with the highest light pollution, all agriculture or industrial sites. My photos document the systemic and systematic eradication of the night that 7 rad expresses scientifically. Through my photos, I challenge viewers to consider their consumption patterns and complacent approvals. After all, as the world population increases, with its high population density, the Netherlands may be the world's canary in the coal mine.";
  const text2 =
    "I started with 7 Rad because, after six years abroad, I moved back to the Netherlands and noticed that we could only observe the brightest stars in Amsterdam at night. When I looked at the maps depicting light pollution in Europe, large swats of the Netherlands would be shown in the uniform colour that the cartographer selected to show the maximum on the pollution scale. As an artificial intelligence specialist, my curiosity was peaked. The motivation of the cartographer is obvious. The Netherlands, with an average of 7 radiance and a peak of 10,956 – New York has an average of 2 radiance and a maximum of 411 radiance – would make the rest of the world look completely dark on the map.";
  const text3 =
    "To identify the areas of light pollution, I developed a data science software package that I make publicly available for download that allows to load and depict data measured by the Visible Infrared Imaging Radiometer Suite (VIIRS) aboard the joint NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP). Today, the only satellite capable of measuring the level of artificial light at night. I identified 13 regions with the highest light pollution through machine learning methodologies. I revisited these areas multiple times and travelled through them for six weeks. When photographing these areas, I took inspiration from the concept of rephotographing introduced by Mark Klett in Rephotographic Survey Project (1977) and adopted on Dutch landscapes by Wout Berger in Poisoned Landscape Revisited (2017), photographing the areas in the middle of the night and revisiting at the middle of the day offering different views and layers to the landscape.";
  const text4 =
    'When photographing at night, I wondered: "How would Aert van Neer picture the Dutch night today?" In 1649, Aert van Neer, a famous painter during the Dutch Golden Age, painted Moonlit Landscape with Bridge, one of his most known oeuvres. It depicts the full moon, in which clouds subtly diffuse light and illuminate a Dutch landscape with a slight reflection in the water. We can see how the moonlight lightens a town in the distance and nature in the foreground. The painting evokes a beautiful night with all the fineness and subtle dynamics of a beautiful moonlit landscape. In my night photographs, I seek to capture the subtleness of the night in winter. Instead of white moonlight, we see orange, pink and blue white lights light up the sky and reflect in the humid Dutch air.';
  const text5 =
    "The different sources of light pollution paint a consistent palette of colours against the night sky. Orange close to greenhouses points to rose horticulture. Pink to growers of chrysanthemums, gerberas, lilies, orchids and tomatoes. In proximity to the only blast furnace in the Netherlands, Orange comes from flames from burning gas inside the furnace. In other industrial areas such as refineries, container shipment areas or data centres, orange is gradually replaced by bright blue-white as security lights. In my photos, I attempt to capture the subtleties captured by Aert van Neer from moonlight, but in my case, from artificial light at night. The details, refinement and colours provoke an initial reaction that pleases the eye until the viewer realises that we shouldn't see these artificial lights; we should see darkness. It is here that the viewer observes that Dutch urbanism has systemic and systematically eradicated the night.";
  const text6 =
    "I use a technical camera with analogue lenses and a digital medium format back to capture the night skies in not rainy or windy conditions. The slow process of hiking, often through the mud, with my headlight combined with the slow process of focusing and framing with a technical camera, brings me into a meditative state. Sometimes, the weather is too bad, and I opt for a medium-format digital camera. During the day, when I revisit the same areas as I photograph during the night, I use two photographic techniques.";
  const text7 =
    "Which photographic approach I employ during the day depends on the message of my photo. I capture the images that accentuate the implications of having considerable light pollution in a country as densely populated as the Netherlands with a technical camera equipped with an infrared-sensitive digital back. The photos are reddish with light blue tones for foliage. The VIIRS satellite, which measurements I use, sees exactly these colours at night. I replicate these, filtering the light with a 590-nanometer bandpass filter. The resulting images are almost monochromatic red and result in disturbing photos. When rephotographing during the day, I will also use a regular medium format digital camera with a telephoto lens to provide more points of reference on the 13 photographed areas. The photos often have the horizon in the centre, seeking to introduce an aspect of monotony that reflects the landscape in the regions photographed. Whether greenhouses or industry, it goes on nonstop for kilometres on end.";
  const text8 =
    "In mixing photography with a technical medium format camera with a regular and an infrared-sensitive back to highlight an environmental issue, I build on Richard Mosse's Broken Spectre, 2022. In contrast to Mattia Balsamini and Raffaele Panizza in Protege Noctem (2023), who have a global view on light pollution mainly provoked by urban areas, I focus solely on the Netherlands and industry.";
  const text9 =
    "In the Netherlands, municipalities regulate the opening and closing of greenhouses according to the Environment and Planning Act. Virtually all roses and other cut flowers and vegetable greenhouses have requested exemptions to open the light shading for longer, allowing growers to reduce the risk of mould growing on plants but also causing more light pollution. For my project, I requested exceptions from 2016 until now through the Dutch Open Government Act for the areas I photographed. I seek to publish these after extracting the essence with artificial intelligence. I aim to use the extracts in captions and as material next to my photographs that I want to hang in the various areas I photographed, building on Zoe Strauss, I-95 (2001). In addition, I aim to develop a science pack based on the software that I developed that aims at high school students and would allow them to analyse the light pollution in the area where they live.";
  const text10 =
    "Through these outreach efforts, I want to democratise my work outside the galleries and engage Dutch citizens and global consumers of flowers, steel and oil products. I hope to shed a different light on greenhouses than David Attenborough did in his documentary A Life on our Planet (2022), where he frames greenhouses in a relatively positive light as do the photographers Kadir van Lohuizen, Greenhouse II (2022) and Luca Locatelli, Future of Farming (2020). Even though greenhouses can offer more efficient farming and human expansion may require these methods, we should not ignore the impact on the darkness of the night.";

  try {
      const photos = await fetchPhotos(`${process.env.NEXT_PUBLIC_SITE_URL}/api/7rad`)
      const landingImage = photos.map((photo: PhotoType) => photo.desktop_blob)[0];
      // const thumbnails = await fetchPhotos(`${process.env.NEXT_PUBLIC_SITE_URL}/api/thumbnail/7rad`)
      return (
          <>
              <Photo photo={landingImage} priority />
              {/*<Gallery images={thumbnails} />*/}
              <Description text={text1} />
              <Description text={text2} />
              <Description text={text3} />
              <Description text={text4} />
              <Description text={text5} />
              <Description text={text6} />
              <Description text={text7} />
              <Description text={text8} />
              <Description text={text9} />
              <Description text={text10} links />

          </>
      );

  } catch {

  }
}
