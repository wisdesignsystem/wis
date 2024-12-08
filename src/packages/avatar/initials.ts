function isFullEnglishName(name: string) {
	return /^[A-Za-z\s]+$/.test(name);
}

function getEnglishInitials(name: string) {
	return name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word.charAt(0).toUpperCase())
		.join("");
}

function isFullChineseName(name: string) {
	return /^[\u4e00-\u9fa5\s]+$/.test(name);
}

function getChineseInitials(name: string) {
	return name.slice(1, 3);
}

function getSmartInitials(name: string) {
	if (isFullEnglishName(name)) {
		return getEnglishInitials(name);
	}

	if (isFullChineseName(name)) {
		return getChineseInitials(name);
	}

	return name.charAt(0);
}

export default function getInitials({ name, initials }: { name: string; initials?: string }) {
	if (initials) {
		return initials;
	}

	return getSmartInitials(name);
}
