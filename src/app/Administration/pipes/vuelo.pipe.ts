import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'vuelo'
})   

export class VueloPipe implements PipeTransform {

    
    transform(value: any, aVuelo: boolean) {
        console.log(value);
        
        //return 'Hola mundo!';
        //return value.toUpperCase();
        return ( aVuelo )
            ? value = 'vuela'
            : value = 'no vuela';
    }
 
}