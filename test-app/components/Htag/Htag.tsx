import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (<h1 className={styles.h1}>{children}</h1>);
			break;
		case 'h2':
			return (<h2 className={styles.h2}>{children}</h2>);
			break;
		case 'h3':
			return (<h3 className={styles.h3}>{children}</h3>);
			break;
		default:
			return (<>{children}</>);
			break;
	}
};