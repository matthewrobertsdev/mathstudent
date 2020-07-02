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
      simplification
    ]
    return lesson
  }
	
	fromInteger(args){
    if (args===undefined){
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
      let numerator1=parseInt(args[2])
      let denom1=parseInt(args[4])
      let fraction1=new Fraction()
      fraction1.createFromNumAndDenom([numerator1, denom1])
      let numerator2=parseInt(args[6])
      let denom2=parseInt(args[8])
      let fraction2=new Fraction()
      fraction2.createFromNumAndDenom([numerator2, denom2])
      let initialization=this.initAddAFraction(numerator1, denom1, numerator2, denom2)
      let solution=[]
      if (denom1===denom2){
        solution=[initialization, this.teaching.denominatorIsTheSame(denom1)]
      } else if (denom1%denom2===0){
        solution=[initialization, this.teaching.denomIsDivisbleByOtherDenom(denom1, denom2)]
      } else if (denom2%denom1===0){
        solution=[initialization, this.teaching.denomIsDivisbleByOtherDenom(denom2, denom1)]
      } else {
        fraction1.simplify()
        fraction2.simplify()
        let simplification1=''
        let simplification2=''
        if (numerator1!==fraction1.numerator){
          simplification1=[this.teaching.tellSimplification(
            numerator1, denom1, 
            fraction1.numerator, fraction1.denominator,
            this.fractionLatex(numerator1, denom1),
            this.fractionLatex(fraction1.numerator, fraction1.denominator), 
          ), `{br}`, this.teaching.checkOutSimplifyingFractions]
        } else {
          simplification1=[this.teaching.tellFraction(numerator1, denom1, 
            this.fractionLatex(numerator1, denom1)), 
            this.teaching.itIsAlreadyInSimplestForm,
            `{br}`,
            this.teaching.checkOutSimplifyingFractions]
        }
        if (numerator2!==fraction2.numerator){
          simplification2=[this.teaching.tellSimplification(
            numerator2, denom2, 
            fraction2.numerator, fraction2.denominator,
            this.fractionLatex(numerator2, denom2),
            this.fractionLatex(fraction2.numerator, fraction2.denominator),
          ), `{br}`, this.teaching.checkOutSimplifyingFractions]
        } else {
          simplification2=[this.teaching.tellFraction(numerator2, denom2, 
            this.fractionLatex(numerator2, denom2)),
            this.teaching.itIsAlreadyInSimplestForm,
            `{br}`,
            this.teaching.checkOutSimplifyingFractions]
        }
        let initialization2=this.initAddAFraction(fraction1.numerator, fraction1.denominator,
           fraction2.numerator, fraction2.denominator)
        solution=[
          initialization,
          [this.teaching.tellNeedToSimplifyFirst,
            this.teaching.tryToSimplifyHeading],
          [this.teaching.forTheFirstFraction],
          simplification1,
          [this.teaching.forTheSecondFraction],
          simplification2,
          [this.teaching.needLCD],
          initialization2
        ]
      }
      return solution
    }
  }

  simplify(args){
    let mathObject=new Fraction()
    mathObject.createFromNumAndDenom([args[0], args[1]])
    let numerator=parseInt(args[0])
    let denominator=parseInt(args[1])
    if (isNaN(numerator) || isNaN(denominator)) {
      mathObject=null
      return []
    } 
    else if (numerator===0 && denominator===0) {
      return this.teaching.indeterminate(
          this.fractionLatex(numerator, denominator)
      )
    } else if (denominator===0){
      return this.teaching.undefined(
          parseInt(args[2]), this.fractionLatex(numerator, denominator)
      )
    } else if (denominator===1) {
      return this.teaching.denominatorIs1(
          numerator, this.fractionLatex(numerator, denominator)
      )
    } else if (numerator===1) {
      return this.teaching.numeratorIs1(
          denominator, this.fractionLatex(numerator, denominator)
      )
    } else if (denominator===numerator) {
      mathObject.createFromNumAndDenom([1,1])
      return this.teaching.numeratorEqualsDenominator(
          numerator, denominator,
          this.fractionLatex(numerator, denominator)
      )
    } else if (denominator%numerator===0) {
      mathObject.createFromNumAndDenom([1,denominator/numerator])
      return this.teaching.denominatorModNumeratorIs0(
          numerator, denominator, this.fractionLatex(1, denominator/numerator, parseInt(args[2])/numerator)
      )
    } else if (numerator%denominator===0) {
      mathObject.createFromNumAndDenom([numerator/denominator,1])
      return this.teaching.numeratorModDenominatorIs0(
          numerator, denominator, numerator/denominator
      )
    } else if (!PrimeFactorization.absVal100_000_000OrLess(numerator)
    ||!PrimeFactorization.absVal100_000_000OrLess(denominator)) {
      let disclaimer=[this.teaching.tryToSimplify]
      disclaimer.push(this.teaching.tooLargeToSimplify)
      return disclaimer
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
        this.teaching.tellFraction(
          mathObject.numerator, mathObject.denominator, this.fractionLatex(mathObject.numerator, mathObject.denominator))
        )
        return primeFactorsTeaching
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
