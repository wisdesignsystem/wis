import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Box.module.scss";

function Content({ className, children, ...rest }) {
	return (
		<div
			{...rest}
			className={classNames(styles.content, { [className]: !!className })}
		>
			{children}
		</div>
	);
}

Content.displayName = "BoxContent";
Content.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Content;
