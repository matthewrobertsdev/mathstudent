import MathTeaching from './MathTeaching';
import AboutFraction from './aboutsections/AboutFraction';
class FractionTeaching extends MathTeaching{
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
    }
    createFromNumAndDenom(args){
        this.numerator=args[0];
        this.denominator=args[1];
    }
    createFromInteger(args){
        this.numerator=args[0];
        this.denominator=1;
    }
    latex=()=>{
        return `\\Huge\\color{gold}\\frac{${this.numerator}}{${this.denominator}}`;
      }
}
export default FractionTeaching;