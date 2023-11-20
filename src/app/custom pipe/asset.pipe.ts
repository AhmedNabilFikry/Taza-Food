import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asset'
})
export class AssetPipe implements PipeTransform {
  transform(value: string): string {

    return `assets/Images/${value}`;
  }
}
