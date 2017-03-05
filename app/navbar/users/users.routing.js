"use strict";
var router_1 = require('@angular/router');
var adduser_component_1 = require('./adduser.component');
var candeactivate_adduser_1 = require('./candeactivate.adduser');
exports.usersrouting = router_1.RouterModule.forChild([
    {
        path: 'users/adduser',
        component: adduser_component_1.AddUserComponent,
        canDeactivate: [candeactivate_adduser_1.CandeactivateAdduser]
    },
    {
        path: 'users/:id',
        component: adduser_component_1.AddUserComponent,
        canDeactivate: [candeactivate_adduser_1.CandeactivateAdduser]
    }
]);
//# sourceMappingURL=users.routing.js.map