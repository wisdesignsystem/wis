declare module "*.scss";
declare module "*.module.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}
declare module "*.css";
declare module "*.module.css" {
	const classes: { readonly [key: string]: string };
	export default classes;
}
declare module "*.svg";
declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.json";
declare module "*.txt";
declare module "@wisdesign/lsicon";

interface WisRemote {
	[remoteName: string]: string;
}

interface Window {
	$__wis_language__: string;
	$__wis_remotes__: WisRemote;
	$__wis_uncheck_remote: (remoteName: string) => string;
}
