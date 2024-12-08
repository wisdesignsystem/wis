export interface I18nResource {
	[key: string]: string | I18nResource;
}

export interface I18nTranslateParams {
  [key: string]: string | number | I18nTranslateParams
}