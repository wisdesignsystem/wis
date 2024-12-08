import { ContextMenu, ContextMenuItem } from "remote:self/contextMenu";

import styles from "./ContextMenu.module.scss";

function Example() {
	return (
		<div className={styles.row}>
			<div className={styles.col}>
				<ContextMenu>
					<div className={styles.content}>Right Click me</div>
					<ContextMenuItem label="Desktop" value="desktop" />
					<ContextMenuItem label="Tablet" value="tablet" />
					<ContextMenuItem label="Mobile" value="mobile" />
				</ContextMenu>
			</div>
		</div>
	);
}

export default Example;
