import DataValidator from './DataValidator';

class NicknameValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
            if (!inNickname) {
                resolve({ valid: false });
            }
            if (inNickname.length > 24) {
                resolve({ valid: false, error: ['nickname_too_long'] });
            }
            if (/^[a-zA-ZÀ-ž0-9\s]{3}[a-zA-ZÀ-ž0-9\s]*$/.test(inNickname)) {
                this._service(inNickname)
                    .then((inResult) => {
                        if (inResult === true) {
                            model.validation.nickname = { valid: true };
                        } else {
                            model.validation.nickname = { valid: false, error: ['nickname_taken'] };
                        }
                    });
                resolve({ valid: false, loading: true });
            }
            resolve({ valid: false, error: ['nickname_too_short'] });
        });

    }
}

class PersonNameValidator extends DataValidator {
    validate(inValue) {
        return new Promise((resolve, reject) => {
            if (!inName) {
                resolve({ valid: false });
            }

            const errorCodes = [];
            if (inName.length < 2) {
                errorCodes.push('name_too_short');
            } else if (/[_\-\._ ]{2}/.test(inName)) {
                errorCodes.push('invalid_character_repetition_in_name');
            } else if (/^\s/.test(inName) || /\s$/.test(inName)) {
                errorCodes.push('invalid_space_position_in_name');
            } else if (inName.length > 24) {
                errorCodes.push('name_too_short');
            } else if (!/^[a-zA-ZÀ-ž-\s]$/.test(inName)) {
                errorCodes.push('invalid_characters_in_name');
            }
            if (/^[a-zA-ZÀ-ž-\s]{2}[a-zA-ZÀ-ž-\s]*$/.test(inName)) {
                resolve({ valid: true });
            }
            if (!errorCodes.length) {
                resolve({ valid: true });
            }
            resolve({ valid: false, error: errorCodes });
        });

    }
}
const person_name = new PersonNameValidator();
const nickname = new NicknameValidator();

export { person_name, nickname };