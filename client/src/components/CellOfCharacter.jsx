import React from 'react'
import cls from 'classnames'

export default function CellOfCharacter ({ image, active }) {
    return (
        <div className={cls('cell', { 'active':  active})}>
            <div className="avatar" style={{ backgroundImage: `url(${image})` }} role="img"></div>
        </div>
    )
}