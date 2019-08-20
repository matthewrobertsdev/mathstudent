import MathTeacher from './MathTeacher';
import AboutFraction from './mathteachings/aboutsections/AboutFraction';
import FractionTeaching from './mathteachings/FractionTeaching';
class FractionTeacher extends MathTeacher{

    teaching=FractionTeaching;

    constructor(){
        super();
        this.callingStrings=[];
        this.about=new AboutFraction().about
        this.anyNumbers=true;
        this.onlyFractions=false;
        this.creationMethodSignatures=this.teaching.creationMethodSignatures
        this.numerator='';
        this.denominator='';
        this.main=[];
    }
    createFromNumAndDenom(args){ this.numerator=args[0]; this.denominator=args[1]; this.teach();}
    createFromInteger(args){ this.numerator=args[0]; this.denominator=1; this.teach();}
    latex=()=>{
            return `\\Huge\\color{gold}`+this.basicLatex();
      }
      basicLatex(){
        return `\\frac{${this.numerator}}{${this.denominator}}`
      }
      inlineLatex(){
          return `{L}\\Large\\color{gold}`+this.basicLatex();
      }
    teach(){
        this.main=[];
        if (this.denominator==='0'&&this.numerator==='0'){
            this.main.push(this.teaching.indeterminate());
        }
        else if(this.denominator==='0'){
            this.main.push(this.teaching.notANumber());
        }
        this.headings=[];
        this.concepts=[];
        this.headings.push('{H}Get simplest form:');
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