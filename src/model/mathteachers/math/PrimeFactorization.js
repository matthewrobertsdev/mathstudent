import Primes0to10_000 from "./Primes0to10_000";
import AbsoluteValue from './AbsoluteValue';

class PrimeFactorization{
    static absValUnder10_000(value){
        return AbsoluteValue.absoluteValueIsUnder(value, 10000);
    }
    /* Take square root
    If it is divisible by prime up to square root,
    add to list
    */ 
    static getPrimeFactorsUnder10_000(value){
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
        return primeFactors;
    }
}
export default PrimeFactorization;