import type { MainProps } from "../layout";
import Layout from "./Layout";

function Main({ children, ...rest }: MainProps) {
	return <Layout {...rest}>{children}</Layout>;
}

Main.displayName = "Main";

export default Main;
