import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './math/Product';
import ListUtility from '../../utilities/ListUtility';
class FractionTeacher {

  goodInput=false

  //the teaching with the String functions
  teaching = FractionTeaching;

  //latex for a fraction
  fractionLatex(numerator, denominator) {
    return `\\frac{${numerator}}{${denominator}}`
  }

  addAFractionProblem(args){
    const splitArgs=args.split('@')
    const num1=parseInt(splitArgs[2])
    const denom1=parseInt(splitArgs[4])
    const num2=parseInt(splitArgs[6])
    const denom2=parseInt(splitArgs[8])
    console.log(this)
    return (
      this.teaching.addAFractionProblem(num1, denom1, num2, denom2,
        `${this.fractionLatex(num1, denom1)}+${this.fractionLatex(num2, denom2)}`)
    )
  }

  fromNumeratorAndDenominatorProblem(args){
    const splitArgs=args.split('@')
    const num1=parseInt(splitArgs[2])
    const denom1=parseInt(splitArgs[4])
    console.log(this)
    return (
      this.teaching.fromNumeratorAndDenominatorProblem(num1, denom1,
        `${this.fractionLatex(num1, denom1)}`)
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
      parseInt(args[2]), parseInt(args[4]), this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
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
      let initialization = this.teaching.fromInteger(parseInt(args[2]), this.fractionLatex(parseInt(args[2]), 1))
      let lesson = [
        initialization
      ]
      return lesson
  }

  //shows a fraction addition
  initAddAFraction(num1, denom1, num2, denom2) {
    return (
      this.teaching.initAddAFraction(num1, denom1, num2, denom2,
        `${this.fractionLatex(num1, denom1)}+${this.fractionLatex(num2, denom2)}`)
    )
  }

  //tells lesson or adds a fraction
  addAFraction(args) {
    if (args === undefined) {
      let initialization = this.teaching.addAFraction()
      let lesson = [
        initialization
      ]
      return lesson
    } else if (isNaN(parseInt(args[2])) || isNaN(parseInt(args[4])) ||
      isNaN(parseInt(args[6])) || isNaN(parseInt(args[8]))) {
      return [this.teaching.tellBadInput()]
    } else {
      this.goodInput=true
      console.log('good input')
    }
    if (!PrimeFactorization.absVal100_000_000OrLess(parseInt(args[2]))
      || !PrimeFactorization.absVal100_000_000OrLess(parseInt(args[4]))
      || !PrimeFactorization.absVal100_000_000OrLess(parseInt(args[6]))
      || !PrimeFactorization.absVal100_000_000OrLess(parseInt(args[8]))) {
      let disclaimer = [[this.teaching.tooLargeToSimplify]]
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
      let initialization = this.initAddAFraction(numerator1, denom1, numerator2, denom2)
      let solution = []
      if (denom1 === denom2) {
        let sum = numerator1 + numerator2
        let fraction = new Fraction()
        fraction.createFromNumAndDenom([sum, denom1])
        fraction.simplify()
        let answer = []
        if (fraction.numerator % fraction.denominator === 0) {
          answer = [
            this.teaching.solutionHeading,
            this.teaching.tellInteger(fraction.denominator / fraction.numerator)
          ]
        } else {
          answer = [
            this.teaching.solutionHeading,
            this.teaching.tellFraction(fraction.numerator, fraction.denominator,
              this.fractionLatex(fraction.numerator, fraction.denominator))
          ]
        }
        solution = [
          initialization, this.teaching.denominatorIsTheSame(denom1),
          this.teaching.tellLCD(denom1),
          this.teaching.tellAddNumerators(denom1, numerator1, numerator2,
            this.fractionLatex(`${numerator1}+${numerator2}`, denom1),
            this.fractionLatex(sum, denom1), sum),
          [this.teaching.tryToSimplifyHeading],
          this.tryToSimplify(sum, denom1, fraction),
          this.teaching.tellFraction(this.fractionLatex(sum, denom1), sum, denom1),
          answer
        ]
      } else if (denom1 % denom2 === 0) {
        let factor = denom1 / denom2
        let newNumerator = numerator2 * factor
        let sum = numerator1 + newNumerator

        return this.tellFactorLCDSolution(initialization, denom1, numerator1, numerator2,
          denom2, factor, newNumerator, sum)
      } else if (denom2 % denom1 === 0) {
        let factor = denom2 / denom1
        let newNumerator = numerator1 * factor
        let sum = numerator2 + newNumerator
        return this.tellFactorLCDSolution(initialization, denom2, numerator2, numerator1,
          denom1, factor, newNumerator, sum)
      } else {
        fraction1.simplify()
        fraction2.simplify()
        let simplification1 = this.tryToSimplify(numerator1, denom1, fraction1)
        let simplification2 = this.tryToSimplify(numerator2, denom2, fraction2)
        let initialization2 = this.initAddAFraction(fraction1.numerator, fraction1.denominator,
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
          [this.teaching.tellNeedToSimplifyFirst,
          this.teaching.tryToSimplifyHeading],
          [this.teaching.forTheFirstFraction],
          simplification1,
          [this.teaching.forTheSecondFraction],
          simplification2,
          [this.teaching.needLCD],
          initialization2,
          this.teaching.tellPrimesUnion(fraction1.denominator, primes1, 
            fraction2.denominator, primes2, primesUnion, lcd),
            this.teaching.tellLCD(lcd),
          this.teaching.multiplyFractionsByMultiple(this.fractionLatex(fraction1.numerator, fraction1.denominator),
          `${this.fractionLatex(`${fraction1.numerator}\\cdot${factor1}`, `${fraction1.denominator}\\cdot${factor1}`)}
          =${this.fractionLatex(newNumerator1, lcd)}`, 
          numerator1, denom1, factor1, newNumerator1,
          lcd),
          this.teaching.multiplyFractionsByMultiple(this.fractionLatex(fraction2.numerator, fraction2.denominator),
          `${this.fractionLatex(`${fraction2.numerator}\\cdot${factor2}`, `${fraction2.denominator}\\cdot${factor2}`)}
          =${this.fractionLatex(newNumerator2, lcd)}`, 
          numerator2, denom2, factor2, newNumerator2,
          lcd),
          this.teaching.tellAddNumerators(lcd, newNumerator1, newNumerator2,
            this.fractionLatex(`${newNumerator1}+${newNumerator2}`, lcd),
            this.fractionLatex(sum, lcd), sum),
            [this.teaching.tryToSimplifyHeading],
      this.tryToSimplify(sum, lcd,
        fractionSolution),
      [
        this.teaching.solutionHeading,
        this.teaching.tellFraction(fractionSolution.numerator, fractionSolution.denominator,
          this.fractionLatex(fractionSolution.numerator, fractionSolution.denominator))
      ]
        ]
      }
      return solution
    }
  }

  tellFactorLCDSolution(initialization, denom1, numerator1, numerator2, denom2, factor, newNumerator, sum) {
    let fractionSolution = new Fraction()
    fractionSolution.createFromNumAndDenom([sum, denom1])
    fractionSolution.simplify()
    return [
      initialization, this.teaching.denomIsDivisbleByOtherDenom(denom1, denom2),
      this.teaching.tellLCD(denom1),
      //this.teaching.multiplyFractionByMultiple(denom1, numerator2,
        //denom2, factor, newNumerator,
        //this.fractionLatex(`${numerator2}\\cdot${factor}`, `${denom2}\\cdot${factor}`)),
        this.teaching.multiplyFractionsByMultiple(this.fractionLatex(numerator2, denom2),
          `${this.fractionLatex(`${numerator2}\\cdot${factor}`, `${denom2}\\cdot${factor}`)}
          =${this.fractionLatex(newNumerator, denom1)}`, 
          numerator2, denom2, factor, newNumerator,
          denom1),
      this.initAddAFraction(newNumerator, denom1, numerator1, denom1),
      this.teaching.tellAddNumerators(denom1, newNumerator, numerator1,
        this.fractionLatex(`${newNumerator}+${numerator1}`, denom1),
        this.fractionLatex(sum, denom1), sum),
      [this.teaching.tryToSimplifyHeading],
      this.tryToSimplify(sum, denom1,
        fractionSolution),
      [
        this.teaching.solutionHeading,
        this.teaching.tellFraction(fractionSolution.numerator, fractionSolution.denominator,
          this.fractionLatex(fractionSolution.numerator, fractionSolution.denominator))
      ]
    ]
  }

  //simplifies a fraction
  tryToSimplify(numerator, denom, fraction) {
    if (numerator !== fraction.numerator) {
      if (numerator % denom === 0) {
        return [this.teaching.tellSimplificationToInteger(numerator, denom,
          this.fractionLatex(numerator, denom), numerator / denom),
        this.teaching.checkOutSimplifyingFractions]
      } else {
        return [this.teaching.tellSimplificationToFraction(
          numerator, denom,
          fraction.numerator, fraction.denominator,
          this.fractionLatex(numerator, denom),
          this.fractionLatex(fraction.numerator, fraction.denominator),
        ), `{br}`, this.teaching.checkOutSimplifyingFractions]
      }
    } else {
      return [this.teaching.tellFraction(numerator, denom,
        this.fractionLatex(numerator, denom)),
      this.teaching.itIsAlreadyInSimplestForm,
        `{br}`,
      this.teaching.checkOutSimplifyingFractions]
    }
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
        this.fractionLatex(numerator, denominator)
      )
    } else if (denominator === 0) {
      return this.teaching.undefined(
        parseInt(args[2]), this.fractionLatex(numerator, denominator)
      )
    } else if (denominator === 1) {
      return this.teaching.denominatorIs1(
        numerator, this.fractionLatex(numerator, denominator)
      )
    } else if (numerator === 1) {
      return this.teaching.numeratorIs1(
        denominator, this.fractionLatex(numerator, denominator)
      )
    } else if (denominator === numerator) {
      mathObject.createFromNumAndDenom([1, 1])
      return this.teaching.numeratorEqualsDenominator(
        numerator, denominator,
        this.fractionLatex(numerator, denominator)
      )
    } else if (denominator % numerator === 0) {
      mathObject.createFromNumAndDenom([1, denominator / numerator])
      return this.teaching.denominatorModNumeratorIs0(
        numerator, denominator, this.fractionLatex(1, denominator / numerator), denominator / numerator
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
          mathObject.numerator, mathObject.denominator, this.fractionLatex(mathObject.numerator, mathObject.denominator))
      )
      return primeFactorsTeaching
    }
  }

}
export default new FractionTeacher();
