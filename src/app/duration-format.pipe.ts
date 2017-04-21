import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat',
  pure: false
})
export class DurationFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let seconds: any;
    let minutes: any;
    let hours:   any;
    
    if (args === 'ms') {
        seconds = Math.floor((value / 1000) % 60);
        minutes = Math.floor(((value / (1000 * 60)) % 60));
        hours   = Math.floor((value / (1000 * 60 * 60)));
        return this.format(seconds, minutes, hours);
    } else if (args === 's') {
        seconds = Math.floor((value % 60));
        minutes = Math.floor(((value / 60) % 60));
        hours   = Math.floor(((value / 60) / 60));
        return this.format(seconds, minutes, hours);
    } else {
      return value;
    }
  }

  private format(seconds, minutes, hours) {
          (hours < 10) ? hours = '0' + hours : hours;
          (minutes < 10) ? minutes = '0' + minutes : minutes;
          (seconds < 10) ? seconds = '0' + seconds : seconds;
          return `${hours}:${minutes}:${seconds}`;
  }

}
