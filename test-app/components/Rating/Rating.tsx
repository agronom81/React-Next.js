import {RatingProps} from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useState } from 'react';

export const Rating = ({isEditable = false, rating, ...props}: RatingProps): JSX.Element => {
	
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	return (
		<div {...props}>

		</div>
	);
};
