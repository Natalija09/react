import React from 'react'

export const Commentsbody = (props) => {
    return (
        <div className="popup">
            <button className="close-popup" name="button" onClick={props.skrijTekst}>&times;</button>
            <div className="popup-container">
                <h3
                    style={{justifyItems:"center" , background: "lavander" }}>
                    {props.prikaziTekst}
                </h3>
            </div>
        </div>
    )
}