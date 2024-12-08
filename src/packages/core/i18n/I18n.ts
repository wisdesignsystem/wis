import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";

import Translate from "./Translate";
import type { I18nResource } from "./type"

const LANGUAGE_STORAGE_KEY = "$__wis_language__";
window.$__wis_language__ = LANGUAGE_STORAGE_KEY;

function setLocalLanguage(language: string) {
	window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}

function getLocalLanguage() {
	return window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
}

class I18n {
	constructor() {
		const language = getLocalLanguage();
		if (language) {
			i18next.init({ lng: language, resources: {} });
		} else {
			i18next.use(languageDetector).init({ resources: {} });
			setLocalLanguage(i18next.language);
		}
	}

	getLanguage() {
		return i18next.language;
	}

	setLanguage(language: string) {
		setLocalLanguage(language);
		window.location.reload();
	}

	resource(resource: I18nResource, namespace?: string, language?: string) {
		const translate = new Translate(i18next, namespace);
		translate.setResource(resource, language);

		return translate;
	}
}

export default I18n;
