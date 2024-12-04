import { matchElement } from "remote:self/core";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Box.module.scss";

function Box({ className, children, ...rest }) {
	const {
		BoxHeader: header,
		BoxContent: content,
		BoxFooter: footer,
	} = matchElement(children, ["BoxHeader", "BoxContent", "BoxFooter"]);

	return (
		<div
			{...rest}
			className={classNames(styles.box, { [className]: !!className })}
		>
			{header}
			{content}
			{footer}
		</div>
	);
}

Box.displayName = "Box";
Box.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Box;
