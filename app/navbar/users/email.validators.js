"use strict";
var EmailValidators = (function () {
    function EmailValidators() {
    }
    EmailValidators.validEmail = function (control) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)))
            return { validEmail: true };
        return null;
    };
    return EmailValidators;
}());
exports.EmailValidators = EmailValidators;
//# sourceMappingURL=email.validators.js.map