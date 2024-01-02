import {Photo} from "../components/photo";
import {Gallery} from "../components/gallery";

import pyr5 from "../../public/pyr/pyr-5.jpg";
import pyr20 from "../../public/pyr/pyr-20.jpg";
import pyr29 from "../../public/pyr/pyr-29.jpg";
import pyr from "../../public/pyr/pyr.jpg";
import pyr36 from "../../public/pyr/pyr-36.jpg";
import pyr51 from "../../public/pyr/pyr-51.jpg";
import pyr65 from "../../public/pyr/pyr-65.jpg";
import pyr67 from "../../public/pyr/pyr-67.jpg";
import pyr78 from "../../public/pyr/pyr-78.jpg";
import pyr81 from "../../public/pyr/pyr-81.jpg";
import pyr86 from "../../public/pyr/pyr-86.jpg";
import pyr87 from "../../public/pyr/pyr-87.jpg";
import pyr92 from "../../public/pyr/pyr-92.jpg";
import pyr101 from "../../public/pyr/pyr-101.jpg";
import pyr104 from "../../public/pyr/pyr-104.jpg";
import pyr108 from "../../public/pyr/pyr-108.jpg";
import pyr115 from "../../public/pyr/pyr-115.jpg";
import pyr120 from "../../public/pyr/pyr-120.jpg";
import { Suspense } from "react";




export default function Pyrenees() {
  const images = [pyr29, pyr, pyr5, pyr20, pyr36, pyr108, pyr87, pyr65, pyr51, pyr67, pyr78, pyr81, pyr86, pyr104, pyr120, pyr115, pyr92, pyr101 ]
  return (
      <>
      <Photo photo={pyr} withDivider/>
      <Suspense fallback={<p>Loading...</p>}>
        <Gallery images={images}/>
      </Suspense>
      </>

  );
}
