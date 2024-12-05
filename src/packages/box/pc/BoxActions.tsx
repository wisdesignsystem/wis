import type { BoxActionsProps } from "../box";

function BoxActions({ className, children, ...rest }: BoxActionsProps) {
	return (
		<div {...rest} className={className}>
			{children}
		</div>
	);
}

BoxActions.displayName = "BoxActions";

export default BoxActions;
