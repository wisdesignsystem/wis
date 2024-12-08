import { Toggle } from "remote:self/toggle";
import { StarIcon } from "@wisdesign/lsicon";

import styles from "./Toggle.module.scss";

function Example() {
	return (
		<div className={styles.row}>
			<div className={styles.col}>
				<Toggle text="Toggle Button" />
				<Toggle text="Toggle Button" icon={<StarIcon />} />
				<Toggle text="Toggle Button" icon={<StarIcon />} iconControl="suffix" />
				<Toggle icon={<StarIcon />} />
			</div>
			<div className={styles.col}>
				<Toggle disabled text="Toggle Button" />
				<Toggle disabled text="Toggle Button" icon={<StarIcon />} />
				<Toggle
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle disabled icon={<StarIcon />} />
			</div>

			<div className={styles.col}>
				<Toggle variant="ghost" text="Toggle Button" />
				<Toggle variant="ghost" text="Toggle Button" icon={<StarIcon />} />
				<Toggle
					variant="ghost"
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle variant="ghost" icon={<StarIcon />} />
			</div>
			<div className={styles.col}>
				<Toggle variant="ghost" disabled text="Toggle Button" />
				<Toggle
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
				/>
				<Toggle
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle variant="ghost" disabled icon={<StarIcon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="sm" text="Toggle Button" />
				<Toggle size="sm" text="Toggle Button" icon={<StarIcon />} />
				<Toggle
					size="sm"
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" icon={<StarIcon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="sm" disabled text="Toggle Button" />
				<Toggle size="sm" disabled text="Toggle Button" icon={<StarIcon />} />
				<Toggle
					size="sm"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" disabled icon={<StarIcon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="sm" variant="ghost" text="Toggle Button" />
				<Toggle
					size="sm"
					variant="ghost"
					text="Toggle Button"
					icon={<StarIcon />}
				/>
				<Toggle
					size="sm"
					variant="ghost"
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" variant="ghost" icon={<StarIcon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="sm" variant="ghost" disabled text="Toggle Button" />
				<Toggle
					size="sm"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
				/>
				<Toggle
					size="sm"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" variant="ghost" disabled icon={<StarIcon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="xs" text="Toggle Button" />
				<Toggle size="xs" text="Toggle Button" icon={<StarIcon />} />
				<Toggle
					size="xs"
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" icon={<StarIcon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="xs" disabled text="Toggle Button" />
				<Toggle size="xs" disabled text="Toggle Button" icon={<StarIcon />} />
				<Toggle
					size="xs"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" disabled icon={<StarIcon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="xs" variant="ghost" text="Toggle Button" />
				<Toggle
					size="xs"
					variant="ghost"
					text="Toggle Button"
					icon={<StarIcon />}
				/>
				<Toggle
					size="xs"
					variant="ghost"
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" variant="ghost" icon={<StarIcon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="xs" variant="ghost" disabled text="Toggle Button" />
				<Toggle
					size="xs"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
				/>
				<Toggle
					size="xs"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<StarIcon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" variant="ghost" disabled icon={<StarIcon />} />
			</div>
		</div>
	);
}

export default Example;
