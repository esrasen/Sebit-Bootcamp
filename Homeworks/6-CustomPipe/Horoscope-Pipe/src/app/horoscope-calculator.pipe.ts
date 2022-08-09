import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horoscopeCalculator'
})
export class HoroscopeCalculatorPipe implements PipeTransform {

  transform(value: string): string {
    const ay = Number(value.slice(5, 7));
    const gun = Number(value.slice(8, 11));
    let burc = "Lütfen tarih seçin";
    if (ay == 1) {
      if (gun <= 20)
        burc = "oğlak";
      else
        burc = "kova";
    }
    else if (ay == 2) {
      if (gun <= 18)
        burc = "kova";
      else
        burc = "balık";
    }
    else if (ay == 3) {
      if (gun <= 20)
        burc = "balık";
      else
        burc = "koç";
    }
    else if (ay == 4) {
      if (gun <= 20)
        burc = "koç";
      else
        burc = "boğa";
    }
    else if (ay == 5) {
      if (gun <= 20)
        burc = "boğa";
      else
        burc = "ikizler";
    }
    else if (ay == 6) {
      if (gun <= 20)
        burc = "ikizler";
      else
        burc = "yengeç";
    }
    else if (ay == 7) {
      if (gun <= 22)
        burc = "yengeç";
      else
        burc = "aslan";
    }
    else if (ay == 8) {
      if (gun <= 23)
        burc = "aslan";
      else
        burc = "başak";
    }
    else if (ay == 9) {
      if (gun <= 23)
        burc = "başak";
      else
        burc = "terazi";
    }
    else if (ay == 10) {
      if (gun <= 23)
        burc = "terazi";
      else
        burc = "akrep";
    }
    else if (ay == 11) {
      if (gun <= 22)
        burc = "akrep";
      else
        burc = "yay";
    }
    else if (ay == 12) {
      if (gun <= 21)
        burc = "yay";
      else
        burc = "oğlak";
    }

    burc = burc[0].toUpperCase() + burc.slice(1);
    return burc;
  }
}
