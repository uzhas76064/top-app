import React, {useEffect, useState} from "react";
import {RatingProps} from "./RatingProps";
import styles from "./Rating.module.css"
import Star from "./star.svg"
import cn from "classnames";
import {ReactSVG} from "react-svg";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])
    const constructRating = (currentRating: number) => {
        const updatedRatingArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <Star key={i} className={cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })}/>
            )
        })
        setRatingArray(updatedRatingArray)
    }

    return  (
        <div>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
}