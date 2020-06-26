import React from 'react'
import {Popup} from './Popup'

export const Gallery = (props) => {

    return(
        <div id="gallery">
            {props.listOfphotos.slice(0,51).map(photo=>{
                return(
                    <div 
                    onClick={()=>{props.openPhoto(photo)}} 
                    key={photo.id}
                    className={"image-holder"}
                    >
                        <img src={photo.thumbnailUrl} 
                        alt={photo.title}/>
                    </div>    
                )
            })}
            {
                props.selectedPhoto !== "" ? <Popup popupPhoto={props.selectedPhoto}
                zatvoriSlika = {props.closedPhoto}/>
                 : null
            }
        </div>
    )

}