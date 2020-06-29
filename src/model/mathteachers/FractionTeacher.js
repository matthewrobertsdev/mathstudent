import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './math/Product';
import ListUtility from '../../utilities/ListUtility';
class FractionTeacher{
	teaching=FractionTeaching; mathObject=Fraction;

  fractionLatex(numerator, denominator){
    return `\\frac{${numerator}}{${denominator}}`
  }
    
  fromNumeratorAndDenominator(args){
    if (args===undefined){
      let initialization=this.teaching.fromNumeratorAndDenominator()
      let lesson=[
        initialization,
      ]
      return lesson
    }
    this.mathObject.createFromNumAndDenom([args[2], args[4]])
    let initialization=this.teaching.fromNumeratorAndDenominator(
      parseInt(args[2]), parseInt(args[4]), this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
    )
    let simplification=this.simplify(args)
    let lesson=[
      initialization,
      simplification
    ]
    return lesson
  }
	
	fromInteger(args){return []}

  simplify(args){
    let numerator=parseInt(args[2])
    let denominator=parseInt(args[4])
    if (isNaN(numerator) || isNaN(denominator)) {
      return (
        [
          `{h}Bad input`,
          `{str}Sorry, but Math Teacher's lesson for fractions expects
           your inputs to be counting numbers, 0 or negative numbers.`
        ]
      )
    } 
    else if (numerator===0 && denominator===0) {
      return (
          this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
      )
    } else if (denominator===0){
      return (
        this.teaching.undefined(
          parseInt(args[2]), this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
          )
      )
    } else if (denominator===1) {
      return (this.teaching.denominatorIs1(
          numerator, this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )
      )
    } else if (numerator===1) {
      return (
        this.teaching.numeratorIs1(
          denominator, this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )
      )
    } else if (denominator===numerator) {
      return (
        this.teaching.numeratorEqualsDenominator(
          numerator, denominator,
          this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )
      )
    } else if (denominator%numerator===0) {
      return (
        this.teaching.denominatorModNumeratorIs0(
          numerator, denominator, this.fractionLatex(1, parseInt(args[4])/parseInt(args[2])), parseInt(args[4])/parseInt(args[2])
          )
      )
    } else if (numerator%denominator===0) {
      return (
        this.teaching.numeratorModDenominatorIs0(
          numerator, denominator, parseInt(args[2])/parseInt(args[4])
        )
      )
    } else if (!PrimeFactorization.absVal100_000_000OrLess(numerator)
    ||!PrimeFactorization.absVal100_000_000OrLess(denominator)) {
      return (
        this.teaching.tooLargeToSimplify
      )
    } else {
      const nArray=PrimeFactorization.getPrimeFactorsUnder100_000_000(numerator);
      const dArray=PrimeFactorization.getPrimeFactorsUnder100_000_000(denominator);
      let primes=null;
			primes=ListUtility.elementsInCommon(nArray, dArray);
      const gcf=Product.getProductOfList(primes);
			this.mathObject.numerator/=gcf;
      this.mathObject.denominator/=gcf;
      let primeFactorsTeaching=this.teaching.getPrimeFactors(
        numerator, nArray,
        denominator, dArray)
      primeFactorsTeaching.push('{br}')
      if (primes.length>0){
        primeFactorsTeaching.push(this.teaching.tellPrimesInCommon(primes))
        primeFactorsTeaching.push('{br}')
        primeFactorsTeaching.push(this.teaching.tellGCF(gcf, primes.length>1))
        primeFactorsTeaching.push('{br}')
        primeFactorsTeaching.push(this.teaching.divideByGCF(
          numerator, denominator, gcf, 
          this.mathObject.numerator, this.mathObject.denominator
          ))
      } else {
        primeFactorsTeaching.push(this.teaching.tellNoPrimesInCommon(primes))
      }
      primeFactorsTeaching.push(
        this.teaching.tellSimplestFormHeading
      )
      primeFactorsTeaching.push(
        this.teaching.tellSimplestForm(
          this.mathObject.numerator, this.mathObject.denominator, this.fractionLatex(this.mathObject.numerator, this.mathObject.denominator))
        )
          console.log(primeFactorsTeaching)
      return (
        primeFactorsTeaching
      )
    }
  }

	operateWithFraction(args, operator){
		this.concept.push(`{IL}\\Huge\\frac{${this.mathObject.numerator}}{${this.mathObject.denominator}}${operator}\\frac{${args[0]}}{${args[1]}}`);
		this.concept.push('\n\n');
	}

	operateWithFractionVoice(args, operation){
		return `begin fraction, ${this.mathObject.numerator} over ${this.mathObject.denominator}, `
		+`end fraction ${operation} begin fraction, ${args[0]} over ${args[1]} end fraction`;
	}

	addAFraction(args){
		//this.concept=[];
    //this.operateWithFraction(args, '+')
    return []
	}

	subtractAFraction(args){
		//this.concept=[];
    //this.operateWithFraction(args, '-')
    return []
	}

	multiplyByAFraction(args){
		//this.concept=[];
    //this.operateWithFraction(args, '\\cdot')
    return []
	}

	divideByAFraction(args){
		//this.concept=[];
    //this.operateWithFraction(args, '\\div')
    return []
	}
}
export default new FractionTeacher();
