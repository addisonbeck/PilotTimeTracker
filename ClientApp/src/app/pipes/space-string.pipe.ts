import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'spaced'
})
export class SpacedStringPipe implements PipeTransform {
  transform(string: string){
    string = string.replace(/([A-Z])/g, ' $1').trim();
    return string.toLowerCase();
  }

}
