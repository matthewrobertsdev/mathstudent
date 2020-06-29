import Primes0to10_000 from "./Primes0to10_000";
import AbsoluteValue from './AbsoluteValue';

class PrimeFactorization{
    static absVal100_000_000OrLess(value){
        return AbsoluteValue.absoluteValueIsEqualOrLessThan(value, 100_000_000);
    }
    /* Take square root
    If it is divisible by prime up to square root,
    add to list
    */ 
    static getPrimeFactorsUnder100_000_000(value){
        value=AbsoluteValue.absoluteValue(value);
        const primes=Primes0to10_000;
        var primeFactors=[];
        var i=0;
        while (primes[i]<=value){
            while(value%primes[i]===0){
                primeFactors.push(primes[i]);
                value/=primes[i];
            }
            i++;
        }
        if (value!==0) {
          primeFactors.push(value)
        }
        return primeFactors;
    }
    static isPrime(){
      if (PrimeFactorization.getPrimeFactorsUnder100_000_000.length===0) {
        return true
      } else {
        return false
      }
    }
}
export default PrimeFactorization;