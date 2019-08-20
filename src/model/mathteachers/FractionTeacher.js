import MathTeacher from './MathTeacher';
import AboutFraction from './mathteachings/aboutsections/AboutFraction';
import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
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
        if (this.mathObject.denominator===0&&this.mathObject.numerator===0){
            this.description=this.teaching.indeterminate(this.inlineLatex());
        }
        else if(this.mathObject.denominator===0){
            this.description=this.teaching.notANumber(this.inlineLatex(), this.numerator);
        }
        this.headings=[];
        this.concepts=[];
        this.headings.push('{H}Get simplest form:');
        console.log(this.description)
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