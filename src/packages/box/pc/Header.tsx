import { matchElement } from "remote:self/core";
import { CircleHelpIcon } from "@wisdesign/lsicon";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "./Box.module.scss";

function Header({ className, title, description, tip, children, ...rest }) {
	const { BoxCollapse: collapse, BoxActions: actions } = matchElement(
		children,
		["BoxCollapse", "BoxActions"],
	);

	return (
		<div
			{...rest}
			className={classNames(styles.header, { [className]: !!className })}
		>
			<div className={styles.top}>
				<div className={styles.info}>
					<div className={styles.wrapper}>
						{collapse}
						<div className={styles.container}>
							<div className={styles.title}>
								<span className={styles.label}>{title}</span>
								{tip && <CircleHelpIcon className={styles.tip} />}
							</div>
							{description && (
								<div className={styles.description} data-description>
									{description}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={styles.actions}>{actions}</div>
			</div>
		</div>
	);
}

Header.displayName = "BoxHeader";
Header.propTypes = {
	/**
	 * @hidden
	 */
	className: PropTypes.string,

	/**
	 * title of Box component
	 *
	 * @type {string}
	 */
	title: PropTypes.string,

	/**
	 * description of Box component
	 *
	 * @type {string}
	 */
	description: PropTypes.string,

	/**
	 * tip text of Box component
	 */
	tip: PropTypes.string,

	/**
	 * @hidden
	 */
	children: PropTypes.node,
};

export default Header;
