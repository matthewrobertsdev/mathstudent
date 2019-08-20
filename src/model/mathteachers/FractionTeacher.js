import MathTeacher from './MathTeacher';
import AboutFraction from '../mathteachings/aboutsections/AboutFraction';
class FractionTeacher extends MathTeacher{
    constructor(){
        super();
        this.objectName="Fraction";
        this.displayNameSingular="Fraction";
        this.singularLowerCase="fraction";
        this.displayNamePlural="Fractions";
        this.pluralLowerCase="fractions";
        this.callingStrings=[];
        this.about=new AboutFraction().about
        this.anyNumbers=true;
        this.onlyFractions=false;
        const NUMERATOR_AND_DENOMINATOR=['Create a fraction with a numerator and a denominator', 'createFromNumAndDenom', 
        'numerator', 'integer', 'denominator', 'integer'];
        const INTEGER=['Create a fraction from an integer', 'createFromInteger', 'integer', 'integer'];
        const DECIMAL=['Create a fraction from a decimal', 'createFromDevcimal', 'decimal', 'decimal'];
        this.creationMethodSignatures.push(NUMERATOR_AND_DENOMINATOR, INTEGER, DECIMAL);

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
            this.main.push('You cannot tell what the value of ')
            this.main.push(this.inlineLatex());
            this.main.push(' because the numerator is divided by the denominator and '+
            'this asks you to find what number times 0 gives you 0, '+
            "which could be any number because 0 multiplied by any number is 0.  ");
            this.main.push(this.inlineLatex());
            this.main.push(' is called indeterminate if other information can not be used to determine its value.')
        }
        else if(this.denominator==='0'){
            this.main.push(this.inlineLatex());
            this.main.push(' is not a number becuase ')
            this.main.push(this.inlineLatex());
            this.main.push('is asking you what number times 0 gives you '+this.numerator+' and no number can be multiplied by 0 to get'+
            ' any number other than 0.');
        }
        this.main.push('{H}Get simplest form:');
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