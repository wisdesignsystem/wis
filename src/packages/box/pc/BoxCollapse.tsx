import * as Collapsible from "@radix-ui/react-collapsible";
import { DownIcon } from "@wisdesign/lsicon";
import classNames from "classnames";

import type { BoxCollapseProps } from "../box";

import styles from "./Box.module.scss";

function BoxCollapse({ className, ...rest }: BoxCollapseProps) {
	return (
		<Collapsible.Trigger
			{...rest}
			className={classNames(styles.collapse, {
				[className as string]: !!className,
			})}
		>
			<DownIcon />
		</Collapsible.Trigger>
	);
}

BoxCollapse.displayName = "BoxCollapse";

export default BoxCollapse;
