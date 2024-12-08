import type { ActionsProps } from "../actions";

import styles from "./Actions.module.scss";

function Actions({ children }: ActionsProps) {
	return <div className={styles.actions}>{children}</div>;
}

Actions.displayName = "Actions";

export default Actions;
