import MathTeacher from './MathTeacher';
import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './math/Product';
import ListUtility from '../../utilities/ListUtility';
class FractionTeacher extends MathTeacher{
	
	teaching=FractionTeaching;
	mathObject=Fraction;
	numerator
	denominator
	simplestForm
	
	constructor(){ super();
		this.callingStrings=[]; this.anyNumbers=true; this.onlyFractions=false;
		this.creationMethodSignatures=this.teaching.creationMethodSignatures;
		this.instanceMethodSignatures=this.teaching.instanceMethodSignatures;
		this.description=[]; this.headings=[]; this.concepts=[]; }
	
	fromNumAndDenom(args){this.init(args);}
	fromInteger(args){args.push(1);this.init(args);}
	init(args){
		this.numerator=parseInt(args[0]); this.mathObject.numerator=parseInt(args[0]);
		this.denominator=parseInt(args[1]); this.mathObject.denominator=parseInt(args[1]); this.simplify();
	}
	latex=()=>{
		return `\\Huge\\color{gold}`+this.basicLatex(this.numerator, this.denominator);
	}
	basicLatex(numerator, denominator){
		return `\\frac{${numerator}}{${denominator}}`
	}
	inlineLatex(numerator, denominator){
		return `{IL}\\Large\\color{gold}`+this.basicLatex(numerator, denominator);
	}
	setSimplestForm(numerator, denominator){
		this.simplestForm=`\\Large\\color{gold}\\frac{${numerator}}{${denominator}}`;
	}
	simplify(){
		this.headings=[];
        this.concepts=[];
        this.description=[];
		if (this.mathObject.denominator===0&&this.mathObject.numerator===0){
			this.description=this.teaching.indeterminate(this.inlineLatex(this.numerator, this.denominator));
		}
		else if(this.mathObject.denominator===0){
			this.description=this.teaching.notANumber(this.inlineLatex(this.numerator, this.denominator),
													  this.mathObject.numerator);
		}
		else if ( this.mathObject.numerator===0 && this.mathObject.denominator!==0){
			//this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            this.concepts[0].push(this.teaching.getSimplestFormHeading);
			this.concepts[0].push(this.teaching.zeroNumerator);
		}
		else if(this.mathObject.denominator===1 && this.mathObject.numerator !==0){
			//this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            this.concepts[0].push(this.teaching.getSimplestFormHeading);
			this.concepts[0].push(this.teaching.oneAsDenominator)
			this.concepts[0].push(`{BL}\\Huge\\color{gold}${this.mathObject.numerator}`);
		}
		else{
			//this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            this.concepts[0].push(this.teaching.getSimplestFormHeading);
			var nArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.numerator);
            var dArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.denominator);
            var primes=null;
			primes=ListUtility.elementsInCommon(nArray, dArray);
			const gcf=Product.getProductOfList(primes);
			this.mathObject.numerator/=gcf;
			this.mathObject.denominator/=gcf;
			this.concepts[0].push(this.teaching.getPrimeFactors(this.numerator, nArray,
																this.denominator, dArray));
			if (primes.length>0){
				this.concepts[0].push(this.teaching.tellPrimesInCommon(primes));
				this.concepts[0].push(this.teaching.tellGCF(gcf));
				if (this.mathObject.numerator<=10000||this.mathObject.denominator<=10000){
					this.concepts[0].push(this.teaching.getSimplifiedForm(this.numerator,
																		  this.denominator, gcf));
					this.concepts[0].push(this.teaching.tellSimplifiedForm(this.mathObject.numerator,
																		   this.mathObject.denominator));
					this.concepts[0].push(this.teaching.simplestFormHeading);
				} else{
					this.concepts[0].push(this.teaching.tooLargeToSimplify);
					this.concepts[0].push(this.teaching.getReducedForm(this.numerator,
																	   this.denominator, gcf));
					this.concepts[0].push(this.teaching.tellReducedForm(this.mathObject.numerator,
																		this.mathObject.denominator));
					this.concepts[0].push(this.teaching.reducedFormHeading);
				}
			}
			else if (this.mathObject.numerator<10000 &&this.mathObject.denominator<10000){
                this.concepts[0].push(this.teaching.tellNoPrimesInCommon());
                this.concepts[0].push(this.teaching.simplestFormHeading);
			}
			else{
                this.concepts[0].push(this.teaching.tooLargeToSimplify);
                this.concepts[0].push(this.teaching.reducedFormHeading);
			}
			
			if (this.mathObject.denominator===1){
				this.concepts[0].push(`{BL}\\Huge\\color{gold}${this.mathObject.numerator}`);
			} else {
				this.concepts[0].push(`{BL}\\Huge\\color{gold}\\frac{${this.mathObject.numerator}}{${this.mathObject.denominator}}`);
			}
		}
		this.setSimplestForm(this.mathObject.numerator, this.mathObject.denominator)
	}
	addFraction(args){
		this.concepts.push([]);
		var fraction=Fraction;
		fraction.reducedFraction(args);
		if (fraction.numerator<=10000||fraction.denominator<=10000){
			this.concepts[0].push(this.teaching.tellSimplifiedForm(fraction.numerator,
																   fraction.denominator));
			this.concepts[0].push(this.teaching.simplestFormHeading);
		} else {
			this.concepts[0].push(this.teaching.tooLargeToSimplify);
			this.concepts[0].push(this.teaching.tellReducedForm(fraction.numerator,
																fraction.denominator));
		}
		this.concepts[0].push(this.inlineLatex(fraction.numerator, fraction.denominator));
	}
}
export default new FractionTeacher();
