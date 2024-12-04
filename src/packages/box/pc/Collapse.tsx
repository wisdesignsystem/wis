import * as Collapsible from "@radix-ui/react-collapsible";
import { DownIcon } from "@wisdesign/lsicon";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Box.module.scss";

function Collapse({ className, ...rest }) {
	return (
		<Collapsible.Trigger
			{...rest}
			className={classNames(styles.collapse, { [className]: !!className })}
		>
			<DownIcon />
		</Collapsible.Trigger>
	);
}

Collapse.displayName = "BoxCollapse";
Collapse.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,
};

export default Collapse;
