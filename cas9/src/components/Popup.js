import React from 'react'

export const Popup = (props) =>{
    return(
        <div className="popup">
        <button name="button" className="close-popup" onClick={props.zatvoriSlika}>&times;</button>
            <div className="popup-container">
                
                <img src={props.popupPhoto} alt={""}/>

            </div>

        </div>
    )
}