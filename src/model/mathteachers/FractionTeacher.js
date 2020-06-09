import MathTeacher from './MathTeacher';
import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './math/Product';
import ListUtility from '../../utilities/ListUtility';
class FractionTeacher{
	teaching=FractionTeaching; mathObject=Fraction; numerator; denominator; simplestForm;
  lesson=[]
  prepared=false
    
  fromNumeratorAndDenominator(args){
    this.lesson=[]
    this.lesson.push(this.teaching.fromNumeratorAndDenominator(parseInt(args[2]), parseInt(args[4])))
    this.prepared=true
    return this.lesson
  }
	
	fromNumAndDenom(args){this.init(args);}
	fromInteger(args){args.push(1);this.init(args);}
	init(args){ this.numerator=parseInt(args[0]); this.mathObject.numerator=parseInt(args[0]);
		this.denominator=parseInt(args[1]); this.mathObject.denominator=parseInt(args[1]); this.simplify(); }
	latex=()=>{
		return `\\Huge`+this.basicLatex(this.numerator, this.denominator);
	}
	basicLatex(numerator, denominator){
		return `\\frac{${numerator}}{${denominator}}`
	}
	inlineLatex(numerator, denominator){
		return `{IL}\\Large`+this.basicLatex(numerator, denominator);
	}
	setSimplestForm(numerator, denominator){
		this.simplestForm=`\\Large\\frac{${numerator}}{${denominator}}`;
	}

	basicVoice(numerator, denominator){
		return `Begin fraction, ${numerator} over ${denominator}, end fraction.`
	}
	simplify(){
        this.concept=[];
		if (this.mathObject.denominator===0&&this.mathObject.numerator===0){
			this.concept=[]
			this.concept=this.teaching.indeterminate(this.inlineLatex(this.numerator, this.denominator));
		} else if(this.mathObject.denominator===0){
			this.concept=[]
			this.concept=this.teaching.notANumber(this.inlineLatex(this.numerator, this.denominator),
													  this.mathObject.numerator);
		} else if ( this.mathObject.numerator===0 && this.mathObject.denominator!==0){
            this.concept=[]
			this.concept.push(this.teaching.getSimplestFormHeading);
			this.concept.push(this.teaching.simplestFormHeading);
			this.concept.push(this.teaching.zeroNumerator);
		} else if (this.mathObject.denominator===1 && this.mathObject.numerator !==0){
            this.concept=[]
            this.concept.push(this.teaching.getSimplestFormHeading);
			this.concept.push(this.teaching.oneAsDenominator)
			this.concept.push(this.teaching.simplestFormHeading);
			this.concept.push(`{BL}\\Huge${this.mathObject.numerator}`);
		} else {
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
		this.concept=[];
		this.operateWithFraction(args, '+')
	}

	subtractAFraction(args){
		this.concept=[];
		this.operateWithFraction(args, '-')
	}

	multiplyByAFraction(args){
		this.concept=[];
		this.operateWithFraction(args, '\\cdot')
	}

	divideByAFraction(args){
		this.concept=[];
		this.operateWithFraction(args, '\\div')
	}
}
export default new FractionTeacher();
