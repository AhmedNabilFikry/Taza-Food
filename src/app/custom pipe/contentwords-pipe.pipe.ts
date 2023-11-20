import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentwordsPipe'
})
export class ContentwordsPipePipe implements PipeTransform {

  transform(value: string, targetWordCount: number): string {
    const words = value.split(' ');
      return words.slice(0, targetWordCount).join(' ') + '...';
   
  }


}
