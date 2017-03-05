import { Router, RouterModule } from '@angular/router';

import { AddUserComponent }     from './adduser.component';
import { CandeactivateAdduser } from './candeactivate.adduser';

export const usersrouting=RouterModule.forChild([
    {   
        path:'users/adduser', 
        component: AddUserComponent,
        canDeactivate:[ CandeactivateAdduser ]
    },
    {   
        path:'users/:id', 
        component: AddUserComponent,
        canDeactivate:[ CandeactivateAdduser ]
    }
]);