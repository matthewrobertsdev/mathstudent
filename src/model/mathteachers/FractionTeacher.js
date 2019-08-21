import MathTeacher from './MathTeacher';
import AboutFraction from './mathteachings/aboutsections/AboutFraction';
import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
class FractionTeacher extends MathTeacher{

    teaching=FractionTeaching;
    mathObject=Fraction

    constructor(){
        super();
        this.callingStrings=[];
        this.about=new AboutFraction().about
        this.anyNumbers=true;
        this.onlyFractions=false;
        this.creationMethodSignatures=this.teaching.creationMethodSignatures
        this.description=[];
        this.headings=[];
        this.concepts=[];
    }
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
          return `{L}\\Large\\color{gold}`+this.basicLatex();
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
        this.headings.push(this.teaching.simplestFormHeading);
        this.concepts.push([]);
        var apology='';
        if (!PrimeFactorization.absValUnder10_000){
            apology=this.teaching.tooLargeToSimplify;
        }
        var nArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.mathObject.numerator);
        var dArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.mathObject.denominator);
        this.concepts[0].push(this.teaching.getPrimeFactors(this.mathObject.numerator, nArray, 
            this.mathObject.denominator, dArray, apology));
        console.log(this.description);
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