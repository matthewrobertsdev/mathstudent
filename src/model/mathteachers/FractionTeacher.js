import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './math/Product';
import ListUtility from '../../utilities/ListUtility';
import {addAFraction} from './AddFractiontoFraction'

//latex for a fraction
export const fractionLatex=(numerator, denominator) => {
  return `\\frac{${numerator}}{${denominator}}`
}

class FractionTeacher {

  goodInput=false

  //the teaching with the String functions
  teaching = FractionTeaching;

  addAFractionProblem(args){
    const splitArgs=args.split('@')
    const num1=parseInt(splitArgs[2])
    const denom1=parseInt(splitArgs[4])
    const num2=parseInt(splitArgs[6])
    const denom2=parseInt(splitArgs[8])
    return (
      this.teaching.addAFractionProblem(num1, denom1, num2, denom2,
        `${fractionLatex(num1, denom1)}+${fractionLatex(num2, denom2)}`)
    )
  }

  fromNumeratorAndDenominatorProblem(args){
    const splitArgs=args.split('@')
    const num1=parseInt(splitArgs[2])
    const denom1=parseInt(splitArgs[4])
    return (
      this.teaching.fromNumeratorAndDenominatorProblem(num1, denom1,
        `${fractionLatex(num1, denom1)}`)
    )
  }

  fromIntegerProblem(args){
    const splitArgs=args.split('@')
    const integer=parseInt(splitArgs[2])
    return this.teaching.fromIntegerProblem(integer)
  }

  //tells lesson or creates a fraction and simplifies it
  fromNumeratorAndDenominator(args) {
    let mathObject = new Fraction()
    if (args === undefined) {
      mathObject = undefined
      let initialization = this.teaching.fromNumeratorAndDenominator()
      let lesson = [
        initialization,
      ]
      return lesson
    } else if (!isNaN(parseInt(args[2]))&&!isNaN(parseInt(args[4]))){
      this.goodInput=true
      console.log('good input')
    }
    mathObject.createFromNumAndDenom([args[2], args[4]])
    let initialization = this.teaching.fromNumeratorAndDenominator(
      parseInt(args[2]), parseInt(args[4]), fractionLatex(parseInt(args[2]), parseInt(args[4]))
    )
    let simplification = this.simplify([args[2], args[4]])
    let lesson = [
      initialization,
      simplification
    ]
    return lesson
  }

  //tells lesson or creates a fraction from an integer
  fromInteger(args) {
    if (args === undefined) {
      let initialization = this.teaching.fromInteger()
      let lesson = [
        initialization
      ]
      return lesson
    } else if (!isNaN(parseInt(args[2]))){
      this.goodInput=true
      console.log('good input')
    }
      let initialization = this.teaching.fromInteger(parseInt(args[2]), fractionLatex(parseInt(args[2]), 1))
      let lesson = [
        initialization
      ]
      return lesson
  }


  

  simplify(args) {
    let mathObject = new Fraction()
    mathObject.createFromNumAndDenom([args[0], args[1]])
    let numerator = parseInt(args[0])
    let denominator = parseInt(args[1])
    if (isNaN(numerator) || isNaN(denominator)) {
      mathObject = null
      return []
    }
    else if (numerator === 0 && denominator === 0) {
      return this.teaching.indeterminate(
        fractionLatex(numerator, denominator)
      )
    } else if (denominator === 0) {
      return this.teaching.undefined(
        parseInt(args[2]), fractionLatex(numerator, denominator)
      )
    } else if (denominator === 1) {
      return this.teaching.denominatorIs1(
        numerator, fractionLatex(numerator, denominator)
      )
    } else if (numerator === 1) {
      return this.teaching.numeratorIs1(
        denominator, fractionLatex(numerator, denominator)
      )
    } else if (denominator === numerator) {
      mathObject.createFromNumAndDenom([1, 1])
      return this.teaching.numeratorEqualsDenominator(
        numerator, denominator,
        fractionLatex(numerator, denominator)
      )
    } else if (denominator % numerator === 0) {
      mathObject.createFromNumAndDenom([1, denominator / numerator])
      return this.teaching.denominatorModNumeratorIs0(
        numerator, denominator, fractionLatex(1, denominator / numerator), denominator / numerator
      )
    } else if (numerator % denominator === 0) {
      mathObject.createFromNumAndDenom([numerator / denominator, 1])
      return this.teaching.numeratorModDenominatorIs0(
        numerator, denominator, numerator / denominator
      )
    } else if (!PrimeFactorization.absVal100_000_000OrLess(numerator)
      || !PrimeFactorization.absVal100_000_000OrLess(denominator)) {
      let disclaimer = [this.teaching.tryToSimplify]
      disclaimer.push(this.teaching.tooLargeToSimplify)
      return disclaimer
    } else {
      const nArray = PrimeFactorization.getPrimeFactorsUnder100_000_000(numerator);
      const dArray = PrimeFactorization.getPrimeFactorsUnder100_000_000(denominator);
      let primes = null;
      primes = ListUtility.elementsInCommon(nArray, dArray);
      const gcf = Product.getProductOfList(primes);
      mathObject.numerator /= gcf;
      mathObject.denominator /= gcf;
      let primeFactorsTeaching = this.teaching.getPrimeFactors(
        numerator, nArray,
        denominator, dArray)
      primeFactorsTeaching.push('{br}')
      if (primes.length > 0) {
        primeFactorsTeaching.push(this.teaching.tellPrimesInCommon(primes))
        primeFactorsTeaching.push('{br}')
        primeFactorsTeaching.push(this.teaching.tellGCF(gcf, primes.length > 1))
        primeFactorsTeaching.push('{br}')
        primeFactorsTeaching.push(this.teaching.divideByGCF(
          numerator, denominator, gcf,
          mathObject.numerator, mathObject.denominator
        ))
      } else {
        primeFactorsTeaching.push(this.teaching.tellNoPrimesInCommon(primes))
      }
      primeFactorsTeaching.push(
        this.teaching.tellSimplestFormHeading
      )
      primeFactorsTeaching.push(
        this.teaching.tellFraction(
          mathObject.numerator, mathObject.denominator, fractionLatex(mathObject.numerator, mathObject.denominator))
      )
      return primeFactorsTeaching
    }
  }
  addAFraction(args){
    try{
      const teaching=addAFraction(args)
      this.goodInput=true
      return teaching
    } catch(error) {
      console.log(error)
      return [this.teaching.tellBadInput()]
    }
  }

}

export default new FractionTeacher();
