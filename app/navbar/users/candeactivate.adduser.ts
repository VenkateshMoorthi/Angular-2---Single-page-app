import { CanDeactivate }    from '@angular/router';
import { FormGroup }        from '@angular/forms';
import { AddUserComponent } from './adduser.component';

export interface FormComponent{
        form:FormGroup;
    }


export class  CandeactivateAdduser implements CanDeactivate<FormComponent>{
    
    canDeactivate(component: FormComponent){
        if(component.form.valid)
            return true;
        return confirm("are you sure?");          
    }
} 