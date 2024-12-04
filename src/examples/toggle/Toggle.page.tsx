import { Toggle } from "remote:self/toggle";

import styles from "./Toggle.module.scss";

function Icon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			fill="none"
			viewBox="0 0 16 16"
			strokeWidth="1"
			strokeLinecap="butt"
			strokeLinejoin="miter"
		>
			<g id="theme=outline">
				<path
					id="Vector"
					stroke="currentColor"
					d="M2 12.5H14M9.6 12.9C9.6 13.7837 8.88365 14.5 8 14.5C7.11634 14.5 6.4 13.7837 6.4 12.9M8 1V3M12.5 12.5H3.5C3.5 12.5 3.5 10.6716 3.5 9.5C3.5 8.74313 3.5 7.86876 3.5 6.99999C3.5 4.51471 5.51472 2.5 8 2.5C10.4853 2.5 12.5 4.51472 12.5 7V12.5Z"
				></path>
			</g>
		</svg>
	);
}

function Example() {
	return (
		<div className={styles.row}>
			<div className={styles.col}>
				<Toggle text="Toggle Button" />
				<Toggle text="Toggle Button" icon={<Icon />} />
				<Toggle text="Toggle Button" icon={<Icon />} iconControl="suffix" />
				<Toggle icon={<Icon />} />
			</div>
			<div className={styles.col}>
				<Toggle disabled text="Toggle Button" value />
				<Toggle disabled text="Toggle Button" icon={<Icon />} />
				<Toggle
					disabled
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle disabled icon={<Icon />} />
			</div>

			<div className={styles.col}>
				<Toggle variant="ghost" text="Toggle Button" />
				<Toggle variant="ghost" text="Toggle Button" icon={<Icon />} />
				<Toggle
					variant="ghost"
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle variant="ghost" icon={<Icon />} />
			</div>
			<div className={styles.col}>
				<Toggle variant="ghost" disabled text="Toggle Button" />
				<Toggle variant="ghost" disabled text="Toggle Button" icon={<Icon />} />
				<Toggle
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle variant="ghost" disabled icon={<Icon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="sm" text="Toggle Button" />
				<Toggle size="sm" text="Toggle Button" icon={<Icon />} />
				<Toggle
					size="sm"
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" icon={<Icon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="sm" disabled text="Toggle Button" />
				<Toggle size="sm" disabled text="Toggle Button" icon={<Icon />} />
				<Toggle
					size="sm"
					disabled
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" disabled icon={<Icon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="sm" variant="ghost" text="Toggle Button" />
				<Toggle
					size="sm"
					variant="ghost"
					text="Toggle Button"
					icon={<Icon />}
				/>
				<Toggle
					size="sm"
					variant="ghost"
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" variant="ghost" icon={<Icon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="sm" variant="ghost" disabled text="Toggle Button" />
				<Toggle
					size="sm"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<Icon />}
				/>
				<Toggle
					size="sm"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="sm" variant="ghost" disabled icon={<Icon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="xs" text="Toggle Button" />
				<Toggle size="xs" text="Toggle Button" icon={<Icon />} />
				<Toggle
					size="xs"
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" icon={<Icon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="xs" disabled text="Toggle Button" />
				<Toggle size="xs" disabled text="Toggle Button" icon={<Icon />} />
				<Toggle
					size="xs"
					disabled
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" disabled icon={<Icon />} />
			</div>

			<div className={styles.col}>
				<Toggle size="xs" variant="ghost" text="Toggle Button" />
				<Toggle
					size="xs"
					variant="ghost"
					text="Toggle Button"
					icon={<Icon />}
				/>
				<Toggle
					size="xs"
					variant="ghost"
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" variant="ghost" icon={<Icon />} />
			</div>
			<div className={styles.col}>
				<Toggle size="xs" variant="ghost" disabled text="Toggle Button" />
				<Toggle
					size="xs"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<Icon />}
				/>
				<Toggle
					size="xs"
					variant="ghost"
					disabled
					text="Toggle Button"
					icon={<Icon />}
					iconControl="suffix"
				/>
				<Toggle size="xs" variant="ghost" disabled icon={<Icon />} />
			</div>
		</div>
	);
}

export default Example;
