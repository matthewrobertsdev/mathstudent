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
    let mathObject=new Fraction()
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
    let simplification=this.simplify([args[2], args[4]])
    let lesson=[
      initialization,
      simplification.solution
    ]
    return lesson
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

  initAddAFraction(num1, denom1, num2, denom2){
    return (
        this.teaching.initAddAFraction(num1, denom1, num2, denom2, 
          `${this.fractionLatex(num1, denom1)}+${this.fractionLatex(num2, denom2)}`)
    )
  }

  addAFraction(args){
    if (args===undefined){
      //mathObject=undefined
      let initialization=this.teaching.addAFraction()
      let lesson=[
        initialization
      ]
      return lesson
    } else if (isNaN(parseInt(args[2])) || isNaN(parseInt(args[4])) ||
    isNaN(parseInt(args[6])) || isNaN(parseInt(args[8]))) {
      return [this.teaching.tellBadInput()]
    } else {
      let initialization=this.initAddAFraction(args[2], args[4], args[6], args[8])
      let simplification1=this.simplify([args[2], args[4]])
      let simplification2=null
      if (args[2]===args[6] && args[4]===args[8]){
        simplification2={
          solution: this.teaching.secondFractionIsTheSameAsFirst(), 
          mathObject: simplification1.mathObject}
      } else {
        simplification2=this.simplify([args[6], args[8]])
      }
      console.log(simplification1)
      console.log(simplification2)
      let lesson=[
        initialization,
        this.teaching.lookAtYourFirstFraction(args[2], args[4], 
          this.fractionLatex(args[2], args[4])),
        simplification1.solution,
        this.teaching.lookAtYourSecondFraction(args[6], args[8],
          this.fractionLatex(args[6], args[8])),
        simplification2.solution,
        this.initAddAFraction( simplification1.mathObject.numerator, simplification1.mathObject.denominator, 
          simplification2.mathObject.numerator, simplification2.mathObject.denominator)

      ]
      return lesson
    }
  }

  simplify(args){
    let solution=[]
    let mathObject=new Fraction()
    mathObject.createFromNumAndDenom([args[0], args[1]])
    console.log(mathObject)

    let numerator=parseInt(args[0])
    let denominator=parseInt(args[1])
    if (isNaN(numerator) || isNaN(denominator)) {
      mathObject=null
      solution=[]
    } 
    else if (numerator===0 && denominator===0) {
      solution=this.teaching.indeterminate(
          this.fractionLatex(numerator, denominator)
      )
    } else if (denominator===0){
      solution=this.teaching.undefined(
          parseInt(args[2]), this.fractionLatex(numerator, denominator)
      )
    } else if (denominator===1) {
      solution=this.teaching.denominatorIs1(
          numerator, this.fractionLatex(numerator, denominator)
      )
    } else if (numerator===1) {
      solution=this.teaching.numeratorIs1(
          denominator, this.fractionLatex(numerator, denominator)
      )
    } else if (denominator===numerator) {
      mathObject.createFromNumAndDenom([1,1])
      solution=this.teaching.numeratorEqualsDenominator(
          numerator, denominator,
          this.fractionLatex(numerator, denominator)
      )
    } else if (denominator%numerator===0) {
      mathObject.createFromNumAndDenom([1,denominator/numerator])
      solution=
        this.teaching.denominatorModNumeratorIs0(
          numerator, denominator, this.fractionLatex(1, denominator/numerator, parseInt(args[2])/numerator)
      )
    } else if (numerator%denominator===0) {
      mathObject.createFromNumAndDenom([numerator/denominator,1])
      solution=
        this.teaching.numeratorModDenominatorIs0(
          numerator, denominator, numerator/denominator
      )
    } else if (!PrimeFactorization.absVal100_000_000OrLess(numerator)
    ||!PrimeFactorization.absVal100_000_000OrLess(denominator)) {
      let disclaimer=[this.teaching.tryToSimplify]
      disclaimer.push(this.teaching.tooLargeToSimplify)
      solution=disclaimer
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
        solution=primeFactorsTeaching
    }
    return {solution: solution, mathObject: mathObject}
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
