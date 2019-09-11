import MathTeacher from './MathTeacher';
import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './Product';
class FractionTeacher extends MathTeacher{

    teaching=FractionTeaching;
    mathObject=Fraction

    constructor(){ super();
        this.callingStrings=[]; this.anyNumbers=true; this.onlyFractions=false;
        this.creationMethodSignatures=this.teaching.creationMethodSignatures;
        this.instanceMethodSignatures=this.teaching.instanceMethodSignatures;
        this.description=[]; this.headings=[]; this.concepts=[]; }
    createFromNumAndDenom(args){ this.mathObject.numerator=parseInt(args[0]); 
        this.mathObject.denominator=parseInt(args[1]); this.teach();}
    createFromInteger(args){ this.mathObject.numerator=parseInt(args[0]); 
        this.mathObject.denominator=1; this.teach();}
    latex=()=>{
            return `\\Huge\\color{gold}`+this.basicLatex();
      }
      basicLatex(){
        return `\\frac{${this.mathObject.numerator}}{${this.mathObject.denominator}}`
      }
      inlineLatex(){
          return `{IL}\\Large\\color{gold}`+this.basicLatex();
      }
    teach(){
        this.headings=[];
        this.concepts=[];
        if (this.mathObject.denominator===0&&this.mathObject.numerator===0){
            this.description=this.teaching.indeterminate(this.inlineLatex());
        }
        else if(this.mathObject.denominator===0){
            this.description=this.teaching.notANumber(this.inlineLatex(), this.mathObject.numerator);
        }
        if ( this.mathObject.numerator===0 && this.mathObject.denominator!==0){
            this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            this.concepts[0].push(this.teaching.zeroNumerator)
        }
        else if(this.mathObject.denominator===1 && this.mathObject.numerator !==0){
            this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            this.concepts[0].push(this.teaching.oneAsDenominator)
            this.concepts[0].push(`{BL}\\Huge\\color{gold}${this.mathObject.numerator}`);
        }
        else{
            this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            var apology='';
        if (!PrimeFactorization.absValUnder10_000(this.mathObject.numerator)
        ||!PrimeFactorization.absValUnder10_000(this.mathObject.denominator)){
            apology=this.teaching.tooLargeToSimplify;
        }
        var nArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.mathObject.numerator);
        var dArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.mathObject.denominator);
        this.concepts[0].push(this.teaching.getPrimeFactors(this.mathObject.numerator, nArray, 
            this.mathObject.denominator, dArray, apology));
            const primes=this.mathObject.elemntsInCommon(nArray, dArray);
            this.concepts[0].push(this.teaching.tellPrimesInCommon(primes))
            const gcf=Product.getProductOfList(primes);
            this.concepts[0].push(this.teaching.tellGCF(gcf))
            const reducedNumerator=this.mathObject.numerator/gcf;
            const reducedDenominator=this.mathObject.denominator/gcf;
            if (reducedNumerator<=10000&&reducedDenominator<=10000){
                this.concepts[0].push(this.teaching.tellSimplifiedForm(this.mathObject.numerator,
                    this.mathObject.denominator, gcf));
                    this.concepts[0].push(this.teaching.simplestFormHeading);
            } else{
                this.concepts[0].push(this.teaching.tellReducedForm(this.mathObject.numerator,
                    this.mathObject.denominator, gcf));
                    this.concepts[0].push(this.teaching.reducedFormHeading);
            }
            if (reducedDenominator===1){
                this.concepts[0].push(`{BL}\\Huge\\color{gold}${reducedNumerator}`);
            } else {
                this.concepts[0].push(`{BL}\\Huge\\color{gold}\\frac{${reducedNumerator}}{${reducedDenominator}}`);
            }
        }
        
      }
}

export default new FractionTeacher();

/*
if (this.denominator==='0'&&this.numerator==='0'){
            fractionString+=`~ is ~ indeterminate`;
        }
        else if(this.denominator==='0'){
            fractionString+=`~ is ~ not ~ a ~ number`;
        }
        return fractionString;
      }
*/