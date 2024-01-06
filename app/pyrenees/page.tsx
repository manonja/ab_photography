import {Photo} from "../components/photo";
import {Gallery} from "../components/gallery";

import pyr1 from "../../public/pyr/abossenbroek-pyrenees-00001.webp";
import pyr2 from "../../public/pyr/abossenbroek-pyrenees-00002.webp";
import pyr3 from "../../public/pyr/abossenbroek-pyrenees-00003.webp";
import pyr4 from "../../public/pyr/abossenbroek-pyrenees-00005.webp";
import pyr5 from "../../public/pyr/abossenbroek-pyrenees-00006.webp";
import pyr6 from "../../public/pyr/abossenbroek-pyrenees-00007.webp";
import pyr7 from "../../public/pyr/abossenbroek-pyrenees-00008.webp";
import pyr8 from "../../public/pyr/abossenbroek-pyrenees-00009.webp";
import pyr9 from "../../public/pyr/abossenbroek-pyrenees-00010.webp";
import pyr10 from "../../public/pyr/abossenbroek-pyrenees-00011.webp";
import pyr11 from "../../public/pyr/abossenbroek-pyrenees-00012.webp";
import pyr12 from "../../public/pyr/abossenbroek-pyrenees-00013.webp";
import pyr13 from "../../public/pyr/abossenbroek-pyrenees-00014.webp";
import pyr14 from "../../public/pyr/abossenbroek-pyrenees-00015.webp";
import pyr15 from "../../public/pyr/abossenbroek-pyrenees-00016.webp";
import pyr16 from "../../public/pyr/abossenbroek-pyrenees-00018.webp";




export default function Pyrenees() {
  const images = [pyr1, pyr2, pyr3, pyr4, pyr5, pyr6, pyr7, pyr8, pyr9, pyr10, pyr11, pyr12, pyr13, pyr14, pyr15, pyr16 ]
  return (
    
      <div className="container sm:my-12">
      <Photo photo={pyr1} withDivider/>
        <Gallery images={images}/>
      </div>
       
      

  );
}
