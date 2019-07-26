import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'appendCurrency'
})

export class AppendCurrency implements PipeTransform {
    transform(value: string, currency: string): string {
        return value + ' ' + currency;
    }
}
