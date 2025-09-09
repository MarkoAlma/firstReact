import { useState } from "react";
import { galleryData } from "../gallery";

export const Gallery = ()=> {

    const [galleria, setGalleria] = useState(galleryData)
    console.log(galleria);

    return(
        <div style={{marginTop:'20px', display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'10px'}}>
            {galleria.map((obj)=> 
                <img className="img-fluid" style={{borderRadius:'10px'}} src={obj.url} alt="" key={obj.id} />
            )}
        </div>
    )
}