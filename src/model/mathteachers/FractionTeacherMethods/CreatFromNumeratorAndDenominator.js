import FractionTeaching from '../mathteachings/FractionTeaching';
import Fraction from '../math/Fraction'
import PrimeFactorization from '../math/PrimeFactorization';
import Product from '../math/Product';
import ListUtility from '../../../utilities/ListUtility';
import {fractionLatex} from './../FractionTeacher'

const teaching = FractionTeaching;

//tells lesson or creates a fraction and simplifies it
export const fromNumeratorAndDenominator=(args)=> {
  let mathObject = new Fraction()
  if (args === undefined) {
    mathObject = undefined
    let initialization = teaching.fromNumeratorAndDenominator()
    let lesson = [
      initialization,
    ]
    return lesson
  } else if (!isNaN(parseInt(args[2]))&&!isNaN(parseInt(args[4]))){
  } else {
    throw Error("Bad Input")
  }
  mathObject.createFromNumAndDenom([args[2], args[4]])
  let initialization = teaching.fromNumeratorAndDenominator(
    parseInt(args[2]), parseInt(args[4]), fractionLatex(parseInt(args[2]), parseInt(args[4]))
  )
  let simplification = simplify([args[2], args[4]])
  let lesson = [
    initialization,
    simplification
  ]
  return lesson
}

function simplify(args) {
  let mathObject = new Fraction()
  mathObject.createFromNumAndDenom([args[0], args[1]])
  let numerator = parseInt(args[0])
  let denominator = parseInt(args[1])
  if (isNaN(numerator) || isNaN(denominator)) {
    mathObject = null
    return []
  }
  else if (numerator === 0 && denominator === 0) {
    return teaching.indeterminate(
      fractionLatex(numerator, denominator)
    )
  } else if (denominator === 0) {
    return teaching.undefined(
      parseInt(args[2]), fractionLatex(numerator, denominator)
    )
  } else if (denominator === 1) {
    return teaching.denominatorIs1(
      numerator, fractionLatex(numerator, denominator)
    )
  } else if (numerator === 1) {
    return teaching.numeratorIs1(
      denominator, fractionLatex(numerator, denominator)
    )
  } else if (denominator === numerator) {
    mathObject.createFromNumAndDenom([1, 1])
    return teaching.numeratorEqualsDenominator(
      numerator, denominator,
      fractionLatex(numerator, denominator)
    )
  } else if (denominator % numerator === 0) {
    mathObject.createFromNumAndDenom([1, denominator / numerator])
    return teaching.denominatorModNumeratorIs0(
      numerator, denominator, fractionLatex(1, denominator / numerator), denominator / numerator
    )
  } else if (numerator % denominator === 0) {
    mathObject.createFromNumAndDenom([numerator / denominator, 1])
    return teaching.numeratorModDenominatorIs0(
      numerator, denominator, numerator / denominator
    )
  } else if (!PrimeFactorization.absVal100_000_000OrLess(numerator)
    || !PrimeFactorization.absVal100_000_000OrLess(denominator)) {
    let disclaimer = [teaching.tryToSimplify]
    disclaimer.push(teaching.tooLargeToSimplify)
    return disclaimer
  } else {
    const nArray = PrimeFactorization.getPrimeFactorsUnder100_000_000(numerator);
    const dArray = PrimeFactorization.getPrimeFactorsUnder100_000_000(denominator);
    let primes = null;
    primes = ListUtility.elementsInCommon(nArray, dArray);
    const gcf = Product.getProductOfList(primes);
    mathObject.numerator /= gcf;
    mathObject.denominator /= gcf;
    let primeFactorsTeaching = teaching.getPrimeFactors(
      numerator, nArray,
      denominator, dArray)
    primeFactorsTeaching.push('{br}')
    if (primes.length > 0) {
      primeFactorsTeaching.push(teaching.tellPrimesInCommon(primes))
      primeFactorsTeaching.push('{br}')
      primeFactorsTeaching.push(teaching.tellGCF(gcf, primes.length > 1))
      primeFactorsTeaching.push('{br}')
      primeFactorsTeaching.push(teaching.divideByGCF(
        numerator, denominator, gcf,
        mathObject.numerator, mathObject.denominator
      ))
    } else {
      primeFactorsTeaching.push(teaching.tellNoPrimesInCommon(primes))
    }
    primeFactorsTeaching.push(
      teaching.tellSimplestFormHeading
    )
    primeFactorsTeaching.push(
      teaching.tellFraction(
        mathObject.numerator, mathObject.denominator, fractionLatex(mathObject.numerator, mathObject.denominator))
    )
    return primeFactorsTeaching
  }
}