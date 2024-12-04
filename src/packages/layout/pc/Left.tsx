import classNames from "classnames";
import PropTypes from "prop-types";

import Layout from "./Layout";

import styles from "./Layout.module.scss";

function Left({ className, title, description, tip, children, ...rest }) {
	return (
		<Layout
			{...rest}
			className={classNames(styles.left, { [className]: !!className })}
			title={title}
			description={description}
			tip={tip}
		>
			{children}
		</Layout>
	);
}

Left.displayName = "Left";
Left.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,

	/**
	 * title of Layout component
	 *
	 * @type {string}
	 */
	title: PropTypes.string,

	/**
	 * description of Layout component
	 *
	 * @type {string}
	 */
	description: PropTypes.string,

	/**
	 * tip text of Layout component
	 */
	tip: PropTypes.string,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Left;
