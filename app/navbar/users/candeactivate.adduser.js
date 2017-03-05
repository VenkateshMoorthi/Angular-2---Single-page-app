"use strict";
var CandeactivateAdduser = (function () {
    function CandeactivateAdduser() {
    }
    CandeactivateAdduser.prototype.canDeactivate = function (component) {
        if (component.form.valid)
            return true;
        return confirm("are you sure?");
    };
    return CandeactivateAdduser;
}());
exports.CandeactivateAdduser = CandeactivateAdduser;
//# sourceMappingURL=candeactivate.adduser.js.map