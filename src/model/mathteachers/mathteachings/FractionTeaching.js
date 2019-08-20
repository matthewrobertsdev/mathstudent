import MathTeaching from './MathTeaching'

class FractionTeaching extends MathTeaching{
    constructor(){
        super();
        this.objectName="Fraction";
        this.displayNameSingular="Fraction";
        this.singularLowerCase="fraction";
        this.displayNamePlural="Fractions";
        this.pluralLowerCase="fractions";
        this.creationMethodSignatures=[];
        const NUMERATOR_AND_DENOMINATOR=['Create a fraction with a numerator and a denominator', 'createFromNumAndDenom', 
        'numerator', 'integer', 'denominator', 'integer'];
        const INTEGER=['Create a fraction from an integer', 'createFromInteger', 'integer', 'integer'];
        const DECIMAL=['Create a fraction from a decimal', 'createFromDevcimal', 'decimal', 'decimal'];
        this.creationMethodSignatures.push(NUMERATOR_AND_DENOMINATOR, INTEGER, DECIMAL);
        this.main=[];
    }
notANumber(inlineLatex){
    var concept=[]
    concept.push('You cannot tell what the value of ')
    concept.push(inlineLatex);
    concept.push(' because the numerator is divided by the denominator and '+
    'this asks you to find what number times 0 gives you 0, '+
    "which could be any number because 0 multiplied by any number is 0.  ");
    concept.push(inlineLatex);
    concept.push(' is called indeterminate if other information can not be used to determine its value.')
    return concept;
}
indeterminate(inlineLatex, numerator){
    var concept=[]
    concept.push(inlineLatex);
    concept.push(' is not a number becuase ')
    concept.push(inlineLatex);
    this.concept.push('is asking you what number times 0 gives you '+numerator+' and no number can be multiplied by 0 to get'+
        ' any number other than 0.');
    return concept;
}
}
export default new FractionTeaching();