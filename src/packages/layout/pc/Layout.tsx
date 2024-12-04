import { Box, BoxActions, BoxContent, BoxHeader } from "remote:self/box";
import { isElement, matchElement } from "remote:self/core";
import { Col, Row } from "remote:self/grid";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Children } from "react";

import styles from "./Layout.module.scss";

function Layout({
	className,
	title,
	description,
	tip,
	responsive,
	gutter,
	children,
	...rest
}) {
	const {
		Actions: actions,
		Left: left,
		Right: right,
		Top: top,
		Bottom: bottom,
		unmatched,
	} = matchElement(
		children,
		[
			{ type: "Actions", maxCount: 1 },
			{ type: "Left", maxCount: 1 },
			{ type: "Right", maxCount: 1 },
			{ type: "Top", maxCount: 1 },
			{ type: "Bottom", maxCount: 1 },
		],
		false,
	);

	const hasModule = unmatched.some((child) => isElement(child, "Module"));
	const isShowHeader = !!title || !!description || !!tip || !!actions;

	return (
		<Box
			{...rest}
			className={classNames(styles.layout, { [className]: !!className })}
		>
			{isShowHeader && (
				<BoxHeader
					className={styles.header}
					title={title}
					description={description}
					tip={tip}
				>
					{!!actions && <BoxActions>{actions}</BoxActions>}
				</BoxHeader>
			)}
			<BoxContent className={styles.vertical}>
				{!!top && <div className={styles.prefix}>{top[0]}</div>}
				<div className={styles.horizontal}>
					{!!left && <div className={styles.prefix}>{left[0]}</div>}
					<div className={styles.content}>
						{hasModule ? (
							<Row responsive={responsive} gutter={gutter}>
								{Children.map(unmatched, (child) => {
									return <Col size={child.props.size}>{child}</Col>;
								})}
							</Row>
						) : (
							unmatched
						)}
					</div>
					{!!right && <div className={styles.suffix}>{right[0]}</div>}
				</div>
				{!!bottom && <div className={styles.suffix}>{bottom[0]}</div>}
			</BoxContent>
		</Box>
	);
}

Layout.displayName = "Layout";
Layout.propTypes = {
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

	gutter: PropTypes.bool,

	/**
	 * @private
	 */
	responsive: PropTypes.bool,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Layout;
