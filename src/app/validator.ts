import { AbstractControl, FormGroup } from '@angular/forms';


export function zipcodeValidator(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp('^[0-9]{6}$');

        if (!regex.test(control.value)) {
            return {
                isError1: true
            };
        }
    }

    return null;
}

export function passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;

        const passControl = control.root.get('password'); // magic is this
        if (passControl) {
            const passValue = passControl.value;
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isError2: true
                };
            }
        }
    }

    return null;
}

export function emailDomainValidator(control: AbstractControl): {[key: string]: any} | any { 
    const email = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1)
    if(domain.toLowerCase()==='wipro.com'){
      return null
    }
    else{
      return {
        'emailDomain': true
      }
    }
       
      }


      export function alphaNumericValidator(control: AbstractControl) {

        if (control && (control.value !== null || control.value !== undefined)) {
            const regex = new RegExp('[0-9]');
    console.log(regex.test(control.value))
            if (!regex.test(control.value)) {
                return {
                    number1: true
                };
            }
        }
    
        return null;
    }
    

    export function mobileNoValidator(control: AbstractControl) {

        if (control && (control.value !== null || control.value !== undefined)) {
            // const regex = new RegExp('[0-9]{10}');
            const regex = new RegExp('\\+[0-9]{1,3}-[0-9]{9,10}$');
    console.log(regex.test(control.value))
            if (!regex.test(control.value)) {
                return {
                    mobNo: true
                };
            }
        }
    
        return null;
    }
