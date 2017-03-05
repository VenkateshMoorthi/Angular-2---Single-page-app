import { FormControl } from '@angular/forms';

export class EmailValidators{
    static validEmail(control: FormControl){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)))
            return {validEmail:true}
        return null;    
    }
}