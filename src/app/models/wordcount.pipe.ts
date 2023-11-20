import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount'
})
export class WordcountPipe implements PipeTransform {

  transform(value: string): string {
    const words = value.trim().split(/\s+/); //split words separated  by spaces//trim spaces
    const slicedWords = words.slice(0, 20); ///cut words from arry
    return slicedWords.join(' ');
  }

}
