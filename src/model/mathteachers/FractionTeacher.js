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
    let initialization=this.teaching.fromNumeratorAndDenominator(
      parseInt(args[2]), parseInt(args[4]), this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
    )
    let simplification=this.simplify(args)
    let lesson=[
      initialization,
      simplification.solution
    ]
    return lesson
  }
	
	fromInteger(args){return []}

  simplify(args){
    let numerator=parseInt(args[2])
    let denominator=parseInt(args[4])
    if (numerator===0 && denominator===0) {
      return {numerator: numerator, denominator: denominator, 
        solution: this.teaching.indeterminate(
          this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )}
    } else if (denominator===0){
      return {numerator: numerator, denominator: denominator, 
        solution: this.teaching.undefined(
          parseInt(args[2]), this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
          )}
    } else if (denominator===1) {
      return {numerator: numerator, denominator: denominator, 
        solution: this.teaching.denominatorIs1(
          numerator, this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )
        }
    } else if (denominator===numerator) {
      return {numerator: numerator, denominator: denominator, 
        solution: this.teaching.numeratorEqualsDenominator(
          numerator, denominator,
          this.fractionLatex(parseInt(args[2]), parseInt(args[4]))
        )
        }
    } else if (!PrimeFactorization.absVal100_000_000OrLess(numerator)
    ||!PrimeFactorization.absVal100_000_000OrLess(denominator)) {
      return {numerator: numerator, denominator: denominator, 
        solution: this.teaching.tooLargeToSimplify
        }
    } else {
      var nArray=PrimeFactorization.getPrimeFactorsUnder100_000_000(numerator);
            var dArray=PrimeFactorization.getPrimeFactorsUnder100_000_000(denominator);
            var primes=null;
			primes=ListUtility.elementsInCommon(nArray, dArray);
			const gcf=Product.getProductOfList(primes);
			this.mathObject.numerator/=gcf;
      this.mathObject.denominator/=gcf;
			const solution=this.teaching.getPrimeFactors(numerator, nArray,
                                denominator, dArray)
      return {numerator: numerator, denominator: denominator, solution: solution}
    }
  }
	simplify2(){
        this.concept=[];
		 {
            this.concept=[]
            this.concept.push(this.teaching.getSimplestFormHeading);
			var nArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.numerator);
            var dArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.denominator);
            var primes=null;
			primes=ListUtility.elementsInCommon(nArray, dArray);
			const gcf=Product.getProductOfList(primes);
			this.mathObject.numerator/=gcf;
			this.mathObject.denominator/=gcf;
			this.concept.push(this.teaching.getPrimeFactors(this.numerator, nArray,
																this.denominator, dArray));
			if (primes.length>0){
				this.concept.push(this.teaching.tellPrimesInCommon(primes));
				this.concept.push(this.teaching.tellGCF(gcf));
				if (this.mathObject.numerator<=10000||this.mathObject.denominator<=10000){
					this.concept.push(this.teaching.getSimplifiedForm(this.numerator,
																		  this.denominator, gcf));
					this.concept.push(this.teaching.tellSimplifiedForm(this.mathObject.numerator,
																		   this.mathObject.denominator));
					this.concept.push(this.teaching.simplestFormHeading);
				} else {
					this.concept.push(this.teaching.tooLargeToSimplify);
					this.concept.push(this.teaching.getReducedForm(this.numerator,
																	   this.denominator, gcf));
					this.concept.push(this.teaching.tellReducedForm(this.mathObject.numerator,
																		this.mathObject.denominator));
					this.concept.push(this.teaching.reducedFormHeading);
				}
			} else if (this.mathObject.numerator<10000 &&this.mathObject.denominator<10000){
                this.concept.push(this.teaching.tellNoPrimesInCommon());
                this.concept.push(this.teaching.simplestFormHeading);
			} else{
                this.concept.push(this.teaching.tooLargeToSimplify);
                this.concept.push(this.teaching.reducedFormHeading);
			}
			
			if (this.mathObject.denominator===1){
				this.concept.push(`{BL}\\Huge${this.mathObject.numerator}`);
			} else {
				this.concept.push(`{BL}\\Huge\\frac{${this.mathObject.numerator}}{${this.mathObject.denominator}}`);
			}
		}
		this.setSimplestForm(this.mathObject.numerator, this.mathObject.denominator)
	}

	getSimplestFormTeaching(args){
		this.concept=[];
		var fraction=Fraction;
		fraction.reducedFraction(args);
		if (fraction.numerator<=10000||fraction.denominator<=10000){
			this.concept.push(this.teaching.tellSimplifiedForm(fraction.numerator,
																   fraction.denominator));
			this.concept.push(this.teaching.simplestFormHeading);
		} else {
			this.concept.push(this.teaching.tooLargeToSimplify);
			this.concept.push(this.teaching.tellReducedForm(fraction.numerator,
																fraction.denominator));
		}
		this.concept.push(this.inlineLatex(fraction.numerator, fraction.denominator));
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
