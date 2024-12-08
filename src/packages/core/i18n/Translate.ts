import type { i18n } from "i18next";
import { nanoid } from "nanoid";

import type { I18nResource, I18nTranslateParams } from "./type"

class Translate {
	private i18next: i18n;
	namespace: string;

	constructor(i18next: i18n, namespace?: string) {
		this.i18next = i18next;
		this.namespace = namespace || nanoid();
	}

	getLanguage() {
		return this.i18next.language;
	}

	getResource() {
		return this.i18next.getResourceBundle(
			this.i18next.language,
			this.namespace,
		);
	}

	setResource(resource: I18nResource, language?: string) {
		this.i18next.addResourceBundle(
			language || this.getLanguage(),
			this.namespace,
			resource,
			true,
			true,
		);
	}

	updateResource(resource: I18nResource, language?: string) {
		this.i18next.addResourceBundle(
			language || this.getLanguage(),
			this.namespace,
			resource,
			true,
			false,
		);
	}

	t(key: string, params: I18nTranslateParams) {
		return this.i18next.t(key, { ...params, ns: this.namespace });
	}
}

export default Translate;
