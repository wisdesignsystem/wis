import attrs from "@/utils/attrs";
import { isNumber } from "@/utils/is";
import PropTypes from "prop-types";

import styles from "./Row.module.scss";

function resolveResponsiveSize(size = {}, defaultSize) {
	if (isNumber(Number.parseInt(size))) {
		return { base: size };
	}

	return {
		base: size.base || defaultSize,
		sm: size.sm,
		md: size.md,
		lg: size.lg,
		xl: size.xl,
		xxl: size.xxl,
	};
}

function Col({ children, size, offset }) {
	const responsiveSize = resolveResponsiveSize(size, 12);
	const responsiveOffset = resolveResponsiveSize(offset);

	return (
		<div
			className={styles.col}
			data-size={responsiveSize.base}
			{...attrs({
				"data-xs-size": responsiveSize.xs,
				"data-sm-size": responsiveSize.sm,
				"data-md-size": responsiveSize.md,
				"data-lg-size": responsiveSize.lg,
				"data-xl-size": responsiveSize.xl,
				"data-xxl-size": responsiveSize.xxl,
				"data-offset": offset,
				"data-xs-offset": responsiveOffset.xs,
				"data-sm-offset": responsiveOffset.sm,
				"data-md-offset": responsiveOffset.md,
				"data-lg-offset": responsiveOffset.lg,
				"data-xl-offset": responsiveOffset.xl,
				"data-xxl-offset": responsiveOffset.xxl,
			})}
		>
			{children}
		</div>
	);
}

Col.displayName = "Col";

const Size = PropTypes.oneOf([
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
]);
const ResponsiveSize = PropTypes.oneOfType([
	Size,
	PropTypes.shape({
		base: Size,
		sm: Size,
		md: Size,
		lg: Size,
		xl: Size,
		xxl: Size,
	}),
]);
Col.propTypes = {
	/**
	 * Size for Col component, support responsive size
	 *
	 * @default 12
	 */
	size: ResponsiveSize,

	/**
	 * Offset for Col component, support responsive size
	 */
	offset: ResponsiveSize,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Col;
