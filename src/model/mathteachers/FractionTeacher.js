import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './math/Product';
import ListUtility from '../../utilities/ListUtility';
class FractionTeacher{
	teaching=FractionTeaching;

  fractionLatex(numerator, denominator){
    return `\\frac{${numerator}}{${denominator}}`
  }
    
  fromNumeratorAndDenominator(args){
    let mathObject=Fraction
    if (args===undefined){
      mathObject=undefined
      let initialization=this.teaching.fromNumeratorAndDenominator()
      let lesson=[
        initialization,
      ]
      return lesson
    }
    mathObject.createFromNumAndDenom([args[2], args[4]])
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

  addAFraction(args){
    if (args===undefined){
      //mathObject=undefined
      let initialization=this.teaching.addAFraction()
      let lesson=[
        initialization
      ]
      return lesson
    } else {
      let initialization=this.teaching.addAFraction(
        parseInt(args[2]), parseInt(args[4]), parseInt(args[6]), parseInt(args[8]), '')
      let lesson=[
        initialization
      ]
      return lesson
    }
  }
	
	fromInteger(args){
    //let mathObject=Fraction
    if (args===undefined){
      //mathObject=undefined
      let initialization=this.teaching.fromInteger()
      let lesson=[
        initialization
      ]
      return lesson
    } else {
      let initialization=this.teaching.fromInteger(parseInt(args[2]), this.fractionLatex(parseInt(args[2]), 1))
      let lesson=[
        initialization
      ]
      return lesson
    }
  }

  simplify(args){
    let mathObject=Fraction
    mathObject.createFromNumAndDenom([args[2], args[4]])
    let numerator=parseInt(args[2])
    let denominator=parseInt(args[4])
    if (isNaN(numerator) || isNaN(denominator)) {
      mathObject=null
      return (
        [
        ]
      )
    } 
    else if (numerator===0 && denominator===0) {
      return (
        this.teaching.indeterminate(
          this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )
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
      mathObject.createFromNumAndDenom([1,1])
      return (
        this.teaching.numeratorEqualsDenominator(
          numerator, denominator,
          this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )
      )
    } else if (denominator%numerator===0) {
      mathObject.createFromNumAndDenom([1,parseInt(args[4])/parseInt(args[2])])
      return (
        this.teaching.denominatorModNumeratorIs0(
          numerator, denominator, this.fractionLatex(1, parseInt(args[4])/parseInt(args[2])), parseInt(args[4])/parseInt(args[2])
          )
      )
    } else if (numerator%denominator===0) {
      mathObject.createFromNumAndDenom([parseInt(args[2])/parseInt(args[4]),1])
      return (
        this.teaching.numeratorModDenominatorIs0(
          numerator, denominator, parseInt(args[2])/parseInt(args[4])
        )
      )
    } else if (!PrimeFactorization.absVal100_000_000OrLess(numerator)
    ||!PrimeFactorization.absVal100_000_000OrLess(denominator)) {
      let disclaimer=[this.teaching.tryToSimplify]
      disclaimer.push(this.teaching.tooLargeToSimplify)
      return (
        disclaimer
      )
    } else {
      const nArray=PrimeFactorization.getPrimeFactorsUnder100_000_000(numerator);
      const dArray=PrimeFactorization.getPrimeFactorsUnder100_000_000(denominator);
      let primes=null;
			primes=ListUtility.elementsInCommon(nArray, dArray);
      const gcf=Product.getProductOfList(primes);
			mathObject.numerator/=gcf;
      mathObject.denominator/=gcf;
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
          mathObject.numerator, mathObject.denominator
          ))
      } else {
        primeFactorsTeaching.push(this.teaching.tellNoPrimesInCommon(primes))
      }
      primeFactorsTeaching.push(
        this.teaching.tellSimplestFormHeading
      )
      primeFactorsTeaching.push(
        this.teaching.tellSimplestForm(
          mathObject.numerator, mathObject.denominator, this.fractionLatex(mathObject.numerator, mathObject.denominator))
        )
      return (
        primeFactorsTeaching
      )
    }
  }

	operateWithFraction(args, operator){
    let mathObject=Fraction
		this.concept.push(`{IL}\\Huge\\frac{${mathObject.numerator}}{${mathObject.denominator}}${operator}\\frac{${args[0]}}{${args[1]}}`);
		this.concept.push('\n\n');
	}

	operateWithFractionVoice(args, operation){
    let mathObject=Fraction
		return `begin fraction, ${mathObject.numerator} over ${mathObject.denominator}, `
		+`end fraction ${operation} begin fraction, ${args[0]} over ${args[1]} end fraction`;
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
