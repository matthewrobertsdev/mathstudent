import Primes0to10_000 from "./Primes0to10_000";

class PrimeFactorization{

    static absValUnder10_000_000(value){
        return AbosoluteValue.absoluteValueIsUnder(value);
    }

    /* Take square root
    If it is divisible by prime up to square root,
    add to list
    */ 

    static getPrimeFactorsUnder10_000(value){
        const limit=Math.sqrt(AbsoluteValue.absoluteValue(value));
        const primes=Primes0to10_000;
        var primeFactors=[];
        var i=0;
        while (primes[i]<=limit){
            while(value%currentPrime==0){
                primeFactors.push(prime[i]);
                value/prime[i];
            }
            i++;
        }
        return primeFactors;
    }
    
}

export default PrimeFactorization;