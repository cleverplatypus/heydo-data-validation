import DataValidator from './DataValidator';

class StreetValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
        	switch(this._countryCode) {
        		case 'it':
        			if(/[a-zA-ZÀ-ž]{2,}/.test(inValue)) {
        				resolve({valid : true});
        			} else {
        				resolve({valid : false, error : 'invalid_street'});
        			}
        			break;
        		default:
        			reject({error : 'unimplemented_country_code'});
        	}
        });
    }
}

class PostalCodeValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
        	switch(this._countryCode) {
        		case 'it':
        			if(/^\d{5}$/.test(inValue)) {
        				resolve({valid : true});
        			} else {
        				resolve({valid : false, error : 'invalid_postal_code'});
        			}
        			break;
        		default:
        			reject({error : 'unimplemented_country_code'});
        	}
        });
    }
}

class CityValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
        	switch(this._countryCode) {
        		case 'it':
        			if(/[a-zA-ZÀ-ž]{2,}/.test(inValue)) {
        				resolve({valid : true});
        			} else {
        				resolve({valid : false, error : 'invalid_city'});
        			}
        			break;
        		default:
        			reject({error : 'unimplemented_country_code'});
        	}
        });
    }
}

class StateProvinceValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
        	switch(this._countryCode) {
        		case 'it':
        			if(/^[a-z]{2}$/i.test(inValue)) {
        				resolve({valid : true});
        			} else {
        				resolve({valid : false, error : 'invalid_state_province'});
        			}
        			break;
        		default:
        			reject({error : 'unimplemented_country_code'});
        	}
        });
    }
}


const street = new StreetValidator(),
	city = new CityValidator(),
	postal_code = new PostalCodeValidator(),
	state_province = new StateProvinceValidator();



export { street, city, postal_code, state_province };