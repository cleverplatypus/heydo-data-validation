class DataValidator {
	withLocale(inLocale) {
		this._locale = inLocale;
		return this;
	}

	withCountry(inCountryCode) {
		this._contryCode = inCountryCode;
		return this;
	}

	withService(inFn) {
		this._service = inFn;
		return this;
	}
	
	validate(inValue) {
		throw new Error(`Not implemented`);
	}
}

export default DataValidator;