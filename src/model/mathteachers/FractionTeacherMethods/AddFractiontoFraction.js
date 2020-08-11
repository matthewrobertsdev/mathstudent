import FractionTeaching from '../mathteachings/FractionTeaching';
import Fraction from '../math/Fraction'
import PrimeFactorization from '../math/PrimeFactorization';
import Product from '../math/Product';
import ListUtility from '../../../utilities/ListUtility';
import {fractionLatex} from './../FractionTeacher'

const teaching = FractionTeaching;

//tells lesson or adds a fraction
export const addAFraction=(args) =>{
  if (args === undefined) {
    let initialization = teaching.addAFraction()
    let lesson = [
      initialization
    ]
    return lesson
  } else if (isNaN(parseInt(args[2])) || isNaN(parseInt(args[4])) ||
    isNaN(parseInt(args[6])) || isNaN(parseInt(args[8]))) {
    throw Error("Bad Input")
  } else if ((parseInt(args[4])===0&&parseInt(args[2])!==0)||(parseInt(args[8])===0&&parseInt(args[6])!==0)){
    return [teaching.undefinedAddition(
      teaching.addAFractionProblem(args[2],args[4],args[6],args[8], fractionLatex(args[2],args[4])+"+"+fractionLatex(args[6],args[8])))]
  } else if (parseInt(args[4])===0||parseInt(args[8])===0){
    return [teaching.indeterminateAddition(
      teaching.addAFractionProblem(args[2],args[4],args[6],args[8], fractionLatex(args[2],args[4])+"+"+fractionLatex(args[6],args[8])))]
  
  }
  if (!PrimeFactorization.absVal100_000_000OrLess(parseInt(args[2]))
    || !PrimeFactorization.absVal100_000_000OrLess(parseInt(args[4]))
    || !PrimeFactorization.absVal100_000_000OrLess(parseInt(args[6]))
    || !PrimeFactorization.absVal100_000_000OrLess(parseInt(args[8]))) {
    let disclaimer = [[teaching.tooLargeToSimplify]]
    return disclaimer
  } else {
    let numerator1 = parseInt(args[2])
    let denom1 = parseInt(args[4])
    let fraction1 = new Fraction()
    fraction1.createFromNumAndDenom([numerator1, denom1])
    let numerator2 = parseInt(args[6])
    let denom2 = parseInt(args[8])
    let fraction2 = new Fraction()
    fraction2.createFromNumAndDenom([numerator2, denom2])
    let initialization = initAddAFraction(numerator1, denom1, numerator2, denom2)
    let solution = []
    if (denom1 === denom2) {
      let sum = numerator1 + numerator2
      let fraction = new Fraction()
      fraction.createFromNumAndDenom([sum, denom1])
      fraction.simplify()
      let answer = []
      if (fraction.numerator % fraction.denominator === 0) {
        answer = [
          teaching.solutionHeading,
          teaching.tellInteger(fraction.denominator / fraction.numerator)
        ]
      } else {
        answer = [
          teaching.solutionHeading,
          teaching.tellFraction(fraction.numerator, fraction.denominator,
            fractionLatex(fraction.numerator, fraction.denominator))
        ]
      }
      solution = [
        initialization, teaching.denominatorIsTheSame(denom1),
        teaching.tellLCD(denom1),
        teaching.tellAddNumerators(denom1, numerator1, numerator2,
          fractionLatex(`${numerator1}+${numerator2}`, denom1),
          fractionLatex(sum, denom1), sum),
        [teaching.tryToSimplifyHeading],
        tryToSimplify(sum, denom1, fraction),
        teaching.tellFraction(fractionLatex(sum, denom1), sum, denom1),
        answer
      ]
    } else if (denom1 % denom2 === 0) {
      let factor = denom1 / denom2
      let newNumerator = numerator2 * factor
      let sum = numerator1 + newNumerator

      return tellFactorLCDSolution(initialization, denom1, numerator1, numerator2,
        denom2, factor, newNumerator, sum)
    } else if (denom2 % denom1 === 0) {
      let factor = denom2 / denom1
      let newNumerator = numerator1 * factor
      let sum = numerator2 + newNumerator
      return tellFactorLCDSolution(initialization, denom2, numerator2, numerator1,
        denom1, factor, newNumerator, sum)
    } else {
      fraction1.simplify()
      fraction2.simplify()
      let simplification1 = tryToSimplify(numerator1, denom1, fraction1)
      let simplification2 = tryToSimplify(numerator2, denom2, fraction2)
      let initialization2 = initAddAFraction(fraction1.numerator, fraction1.denominator,
        fraction2.numerator, fraction2.denominator)
      let primes1=PrimeFactorization.getPrimeFactorsUnder100_000_000(fraction1.denominator)
      let primes2=PrimeFactorization.getPrimeFactorsUnder100_000_000(fraction2.denominator)
      let primesUnion=ListUtility.elementsNoDuplicatesInCommon(primes1, primes2)
      let lcd=Product.getProductOfList(primesUnion)
      let factor1=lcd/fraction1.denominator
      let factor2=lcd/fraction2.denominator
      let newNumerator1=factor1*fraction1.numerator
      let newNumerator2=factor2*fraction2.numerator
      let sum=newNumerator1+newNumerator2
      let fractionSolution=new Fraction()
      fractionSolution.createFromNumAndDenom([sum, lcd])
      fractionSolution.simplify()
      solution = [
        initialization,
        [teaching.tellNeedToSimplifyFirst,
        teaching.tryToSimplifyHeading],
        [teaching.forTheFirstFraction],
        simplification1,
        [teaching.forTheSecondFraction],
        simplification2,
        [teaching.needLCD],
        initialization2,
        teaching.tellPrimesUnion(fraction1.denominator, primes1, 
          fraction2.denominator, primes2, primesUnion, lcd),
          teaching.tellLCD(lcd),
        teaching.multiplyFractionsByMultiple(fractionLatex(fraction1.numerator, fraction1.denominator),
        `${fractionLatex(`${fraction1.numerator}\\cdot${factor1}`, `${fraction1.denominator}\\cdot${factor1}`)}
        =${fractionLatex(newNumerator1, lcd)}`, 
        numerator1, denom1, factor1, newNumerator1,
        lcd),
        teaching.multiplyFractionsByMultiple(fractionLatex(fraction2.numerator, fraction2.denominator),
        `${fractionLatex(`${fraction2.numerator}\\cdot${factor2}`, `${fraction2.denominator}\\cdot${factor2}`)}
        =${fractionLatex(newNumerator2, lcd)}`, 
        numerator2, denom2, factor2, newNumerator2,
        lcd),
        teaching.tellAddNumerators(lcd, newNumerator1, newNumerator2,
          fractionLatex(`${newNumerator1}+${newNumerator2}`, lcd),
          fractionLatex(sum, lcd), sum),
          [teaching.tryToSimplifyHeading],
    tryToSimplify(sum, lcd,
      fractionSolution),
    [
      teaching.solutionHeading,
      teaching.tellFraction(fractionSolution.numerator, fractionSolution.denominator,
        fractionLatex(fractionSolution.numerator, fractionSolution.denominator))
    ]
      ]
    }
    return solution
  }
}

function tellFactorLCDSolution(initialization, denom1, numerator1, numerator2, denom2, factor, newNumerator, sum) {
  let fractionSolution = new Fraction()
  fractionSolution.createFromNumAndDenom([sum, denom1])
  fractionSolution.simplify()
  return [
    initialization, teaching.denomIsDivisbleByOtherDenom(denom1, denom2),
    teaching.tellLCD(denom1),
    //this.teaching.multiplyFractionByMultiple(denom1, numerator2,
      //denom2, factor, newNumerator,
      //this.fractionLatex(`${numerator2}\\cdot${factor}`, `${denom2}\\cdot${factor}`)),
      teaching.multiplyFractionsByMultiple(fractionLatex(numerator2, denom2),
        `${fractionLatex(`${numerator2}\\cdot${factor}`, `${denom2}\\cdot${factor}`)}
        =${fractionLatex(newNumerator, denom1)}`, 
        numerator2, denom2, factor, newNumerator,
        denom1),
    initAddAFraction(newNumerator, denom1, numerator1, denom1),
    teaching.tellAddNumerators(denom1, newNumerator, numerator1,
      fractionLatex(`${newNumerator}+${numerator1}`, denom1),
      fractionLatex(sum, denom1), sum),
    [teaching.tryToSimplifyHeading],
    tryToSimplify(sum, denom1,
      fractionSolution),
    [
      teaching.solutionHeading,
      teaching.tellFraction(fractionSolution.numerator, fractionSolution.denominator,
        fractionLatex(fractionSolution.numerator, fractionSolution.denominator))
    ]
  ]
}

//shows a fraction addition
function initAddAFraction(num1, denom1, num2, denom2) {
  return (
    teaching.initAddAFraction(num1, denom1, num2, denom2,
      `${fractionLatex(num1, denom1)}+${fractionLatex(num2, denom2)}`)
  )
}

//simplifies a fraction
function tryToSimplify(numerator, denom, fraction) {
  if (numerator !== fraction.numerator) {
    if (numerator % denom === 0) {
      return [teaching.tellSimplificationToInteger(numerator, denom,
        fractionLatex(numerator, denom), numerator / denom),
      teaching.checkOutSimplifyingFractions]
    } else {
      return [teaching.tellSimplificationToFraction(
        numerator, denom,
        fraction.numerator, fraction.denominator,
        fractionLatex(numerator, denom),
        fractionLatex(fraction.numerator, fraction.denominator),
      ), `{br}`, teaching.checkOutSimplifyingFractions]
    }
  } else {
    return [teaching.tellFraction(numerator, denom,
      fractionLatex(numerator, denom)),
    teaching.itIsAlreadyInSimplestForm,
      `{br}`,
    teaching.checkOutSimplifyingFractions]
  }
}