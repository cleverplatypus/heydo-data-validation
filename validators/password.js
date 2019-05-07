import DataValidator from './DataValidator';

class PasswordValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
            if (!inPassword) {
                resolve({ valid: false });
            }
            const errorCodes = [];
            if (inPassword.length < 8) {
                errorCodes.push('password_too_short');
            }

            if (!/[*\.!@#\$%\^&\-+=,?]/.test(inPassword)) {
                errorCodes.push('password_must_contain_symbol');
            }

            if (!/\w/.test(inPassword)) {
                errorCodes.push('password_must_contain_letter');
            }

            if (!/\d/.test(inPassword)) {
                errorCodes.push('password_must_contain_digit');
            }
            if (!errorCodes.length) {
                resolve({ valid: true });
            }
            resolve({ valid: false, error: errorCodes });
        });

    }
}
const password = new PasswordValidator();

export { password };