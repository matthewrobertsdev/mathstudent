import MathTeaching from './MathTeaching';
class FractionTeaching extends MathTeaching{
    constructor(){
        super();
        this.objectName="Fraction";
        this.displayNameSingular="Fraction";
        this.singularLowerCase="fraction";
        this.displayNamePlural="Fractions";
        this.pluralLowerCase="fractions";
        this.callingStrings=[];
        this.about=[];
        this.about.push("A fraction is a way of expressing a number as being a part of another number.  It can be a part "+
        "of that number or a part of a multiple of that number.  Fractions use only numbers that have nothing after the "+
        "decimal point to do this.  In order to communicate one number as a part of another number, fractions use a numerator "+
        "and a demoninator.  If the numerator is equal to the denominator, the value of the fraction is one.  The denominator "+
        "divides the numerator. Therefore, if we do not take into account negative signs, as the denominator grows, the number "+
        " shrinks, and as the numerator grows, the number grows.  Both numerator and denominator are constant for a given "+
        "fraction.  If we ignore negative signs, if the numerator is less than the denominator, the number is less than one, "+
        "if they are equal, it is one, and if it is greater, it is greater than one.  If the numerator divided by the "+
        "denominator is a number with nothing after the decimal point, then the numerator is a multiple of the denominator "+
        "and the fraction can be written as a number that is not a fraction and has no decimal point.");
        this.anyNumbers=true;
        this.onlyFractions=false;
        const NUMERATOR_AND_DENOMINATOR=['Create a fraction with a numerator and a denominator', 'createFromNumAndDenom', 'numerator', 'number', 'denominator', 'number'];
        const INTEGER=['Create a fraction from an integer', 'createFromInteger', 'integer', 'number'];
        const DECIMAL=['Create a fraction from a decimal', 'createFromDevcimal', 'decimal', 'number'];
        this.creationMethodSignatures.push(NUMERATOR_AND_DENOMINATOR, INTEGER, DECIMAL);
    }
}
export default FractionTeaching;