import DataValidator from './DataValidator';

class EmailValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
            var emailRE =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i; //jshint ignore:line
            if (!inEmail) {
                resolve({ valid: false });
            }
            if (emailRE.test(inEmail)) {
                this._service(inEmail)
                    .then((inResult) => {
                        if (inResult === true) {
                            model.validation.email = { valid: true };
                        } else {
                            model.validation.email = { valid: false, error: ['user_already_exists'] };
                        }
                    });

                resolve({ valid: false, loading: true });
            }
            resolve({ valid: false, error: ['invalid_email'] });
        });

    }
}
const email = new EmailValidator();

export { email };