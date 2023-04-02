import React, {useEffect, useState, KeyboardEvent} from "react";
import {RatingProps} from "./RatingProps";
import styles from "./Rating.module.css"
import Star from "./star.svg"
import cn from "classnames";

export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating])
    const constructRating = (currentRating: number) => {
        const updatedRatingArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick = {() => changeRating(i + 1)}
                      className={cn(styles.star, {
                      [styles.filled]: i < currentRating,
                      [styles.pointer]: isEditable
                })}>
                    <Star
                          tabIndex = {isEditable ? 0 : -1}
                          onKeyDown = {(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(e, i + 1)}
                         />
                </span>

            )
        })
        setRatingArray(updatedRatingArray)
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i)
    }

    const changeRating = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i)
    }

    const handleSpace = (e: KeyboardEvent<SVGAElement>, i: number) => {
        if (e.code !== "Space" || !setRating) {
            return;
        }

        setRating(i)
    }

    return  (
        <div>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    )
}