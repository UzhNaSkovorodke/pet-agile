import * as React from 'react'

import styles from './Navigation.module.scss'

interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav_leftSide}>
				<div>Logo</div>
				<div>Dashboards</div>
			</div>
			<div>Auth</div>
		</nav>
	)
}

export default Navigation
