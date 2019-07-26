import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sqrt'
})

export class Sqrt implements PipeTransform {
    transform(value: number, pretext: string): number {
        return Math.sqrt(value);
    }
}
