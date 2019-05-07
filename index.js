
import {email, phone_number} from './validators/contact';
import {person_name} from './validators/person-data';
import {postal_code, street, state_province, city} from './validators/location';
import password from './validators/password';
import {tax_number, invoicing_code} from './validators/fiscal';

const validators = {
	email,
	city,
	person_name,
	nickname,
	postal_code,
	address,
	state_province,
	password
};

const validatorService = {};

class DataValidation {
	hasValidator(inName) {
		return !!validators[inName];
	}
	
	withLocale(inLocale) {
		this._locale = inLocale;
		return this;
	}

	withCountry(inCountryCode) {
		this._contryCode = inCountryCode;
		return this;
	}

	validate(inName, inValue) {
		if(!validators[inName]) {
			throw new Error(`Validator with name ${inName} not found`);
		}
		return validators[inName]
			.withLocale(this._locale)
			.withCountry(this._contryCode)
			.withService(validatorService[inName])
			.validate(inValue);
	}

	static registerService(inValidatorName, inFn) {
		if(!validators[inValidatorName]) {
			throw new Error(`Validator with name ${inValidatorName} not found`);
		}
		validatorService[inValidatorName] = inFn;
	}


}

export {DataValidation};