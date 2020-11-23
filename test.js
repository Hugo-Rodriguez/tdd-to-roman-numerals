import { toRoman } from './index';
import { strictEqual } from "assert";

describe(('Conversión a números romanos'), () => {
  it('test 1', () => { strictEqual(toRoman(1), "I") });
  it('test 2', () => { strictEqual(toRoman(2), "II") });
  it('test 3', () => { strictEqual(toRoman(3), "III") });
  it('test 4', () => { strictEqual(toRoman(4), "IV") });
  it('test 5', () => { strictEqual(toRoman(5), "V") });
  it('test 6', () => { strictEqual(toRoman(6), "VI") });
  it('test 7', () => { strictEqual(toRoman(7), "VII") });
  it('test 9', () => { strictEqual(toRoman(9), "IX") });
  it('test 10', () => { strictEqual(toRoman(10), "X") }); 
  it('test 11', () => { strictEqual(toRoman(11), "XI") });
  it('test 14', () => { strictEqual(toRoman(14), "XIV") });
  it('test 18', () => { strictEqual(toRoman(18), "XVIII") });
  it('test 20', () => { strictEqual(toRoman(20), "XX") });
  it('test 24', () => { strictEqual(toRoman(24), "XXIV") });
  it('test 28', () => { strictEqual(toRoman(28), "XXVIII") });
  it('test 37', () => { strictEqual(toRoman(37), "XXXVII") });
  it('test 47', () => { strictEqual(toRoman(47), "XLVII") });
  it('test 67', () => { strictEqual(toRoman(67), "LXVII") });
  it('test 88', () => { strictEqual(toRoman(88), "LXXXVIII") });
  it('test 90', () => { strictEqual(toRoman(90), "XC") });
  it('test 100', () => { strictEqual(toRoman(100), "C") });
  it('test 138', () => { strictEqual(toRoman(138), "CXXXVIII") });
  it('test 338', () => { strictEqual(toRoman(338), "CCCXXXVIII") });
  it('test 510', () => { strictEqual(toRoman(510), "DX") });
  

  
  
  
})