import type { ReactNode } from "react"

import styles from "./Actions.module.scss";

interface ActionsProps {
	children: ReactNode;
}

function Actions({ children }: ActionsProps) {
	return <div className={styles.actions}>{children}</div>;
}

Actions.displayName = "Actions";

export default Actions;
