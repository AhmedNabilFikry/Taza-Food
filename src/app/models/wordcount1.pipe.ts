import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount1'
})
export class Wordcount1Pipe implements PipeTransform {
  transform(value: string): string {
    const words = value.trim().split(/\s+/); //split words separated  by spaces//trim spaces
    const slicedWords = words.slice(0,3); ///cut words from arry
    return slicedWords.join(' ');
  }

}
