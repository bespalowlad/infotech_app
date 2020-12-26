import React from 'react'

export default function CellOfCharacter ({ image }) {
    return (
        <div className="cell">
            <div className="avatar" style={{ backgroundImage: `url(${image})` }} role="img"></div>
        </div>
    )
}