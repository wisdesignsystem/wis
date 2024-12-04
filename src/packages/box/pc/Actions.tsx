import PropTypes from "prop-types";

function Actions({ className, children, ...rest }) {
	return (
		<div {...rest} className={className}>
			{children}
		</div>
	);
}

Actions.displayName = "BoxActions";
Actions.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Actions;
