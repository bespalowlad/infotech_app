import React from 'react'
import cls from 'classnames'
import inkognitoImg from '../assets/images/inkognito.jpg'

export default function CellOfCharacter ({ image, active }) {
    return (
        <div className={cls('cell', { 'active':  active})}>
            <div className="avatar" style={{ backgroundImage: `url(${image}), url(${inkognitoImg})` }} role="img"></div>
        </div>
    )
}