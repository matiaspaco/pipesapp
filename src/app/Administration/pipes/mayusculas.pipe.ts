import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'mayusculas'
})   

export class MayusculasPipe implements PipeTransform {

    
    transform(value: any, enMayusculas: boolean) {
        console.log(value);
        
        //return 'Hola mundo!';
        //return value.toUpperCase();
        return ( enMayusculas )
            ? value.toUpperCase()
            : value.toLowerCase();
    }
 
}