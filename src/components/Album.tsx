import React, {useState} from "react";
import "../styles/main.scss";
import {ImageType} from '../types';

export type PropsType = {
    images: ImageType[],
    emoji?: string,
    isSelected: boolean,
};

export const Album = ({props}: {props: PropsType}) => {
    const {images, emoji} = props;
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="container"
            // animate={(isHover || isSelected) ? {y: 25} : {y: 0}}
            // transition={{duration: 0.3}}
        >
            <div className="top-icon">
            {emoji ? emoji : ''}
            </div>
            <div
                className='image0'
                // animate={(isHover || isSelected) ? {bottom: '-10px'} : {bottom: '0px'}}
            >
            {images[0].imageUrl ? (
                <img
                    src={images[0].imageUrl}
                    alt={images[0].imageAlt}
                    width={150}
                    className='image'
                />
            ): (
                <div className="default-image" />
            )}
            </div>
            <div
                className='image1'
                // animate={(isHover || isSelected) ? {transform: 'rotate(-30deg)', bottom: '15px', left: '0px'} : {transform: 'rotate(-9deg)', bottom: '10px', left: '10px'}}
                // transition={{duration: 0.3}}
            >
            {images[1].imageUrl ? (
                <img
                    src={images[1].imageUrl}
                    alt={images[1].imageAlt}
                    className='image'
                />
            ) : (
                <div className="default-image" />
            )}
            </div>
            <div
                className='image2'
                // animate={(isHover || isSelected) ? {transform: 'rotate(30deg)', bottom: '30px', right: '0px'} : {transform: 'rotate(9deg)', bottom: '20px', right: '10px'}}
                // transition={{duration: 0.3}}
            >
            {images[2].imageUrl ? (
                <img
                    src={images[2].imageUrl}
                    alt={images[2].imageAlt}
                    className='image'
                />
            ) : (
                <div className="default-image" />
            )}
            </div>
            <div
                className='image3'
                // animate={(isHover || isSelected) ? {transform: 'rotate(-10deg)', bottom: '60px'} : {transform: 'rotate(-9deg)', bottom: '30px'}}
                // transition={{duration: 0.3}}
            >
            {images[3].imageUrl ? (
                <img
                    src={images[3].imageUrl}
                    alt={images[3].imageAlt}
                    className='image'
                />
            ) : (
                <div className="default-image" />
            )}
            </div>
        </div>
    );
};
