import MathTeaching from './MathTeaching'
import AboutFraction from './aboutsections/AboutFraction';
import MathHeading from '../../utilities/MathHeading'
class FractionTeaching extends MathTeaching{
    constructor(){
        super();
        this.objectName="Fraction";
        this.displayNameSingular="Fraction";
        this.singularLowerCase="fraction";
        this.displayNamePlural="Fractions";
        this.pluralLowerCase="fractions";
        this.about=new AboutFraction().about
        this.creationMethodSignatures=[];
        const NUMERATOR_AND_DENOMINATOR=['Create a fraction with a numerator and a denominator', 'createFromNumAndDenom', 
        'numerator', 'integer', 'denominator', 'integer'];
        const INTEGER=['Create a fraction from an integer', 'createFromInteger', 'integer', 'integer'];
        //const DECIMAL=['Create a fraction from a decimal', 'createFromDevcimal', 'decimal', 'decimal'];
        this.creationMethodSignatures.push(NUMERATOR_AND_DENOMINATOR, INTEGER);
        this.main=[];
        this.instanceMethodSignatures=[];
        const addHeading=new MathHeading();
        addHeading.components.push('Add a fraction to ');
        addHeading.components.push('{Latex}');
        const ADD=['Add a Fraction', addHeading, 'add', 'numerator', 'integer', 'denominator', 'integer'];
        const subtractHeading=new MathHeading();
        subtractHeading.components.push('Subtract a fraction from ');
        subtractHeading.components.push('{Latex}');
        const SUBTRACT=['Subtract a fraction', subtractHeading, 'subtract', 'numerator', 'integer', 'denominator', 'integer'];
        const multiplyHeading=new MathHeading();
        multiplyHeading.components.push('Multiply ');
        multiplyHeading.components.push('{Latex}');
        multiplyHeading.components.push(' by a fraction');
        const MULTIPLY=['Multiply by a Fraction', multiplyHeading, 'multiply', 'numerator', 'integer', 'denominator', 'integer'];
        const dvideHeading=new MathHeading();
        dvideHeading.components.push('Divide ');
        dvideHeading.components.push('{Latex}');
        dvideHeading.components.push(' by a fraction');
        const DIVIDE=['Divide By a Fraction', dvideHeading, 'divide', 'numerator', 'integer', 'denominator', 'integer'];
        this.instanceMethodSignatures.push(ADD, SUBTRACT, MULTIPLY, DIVIDE);
    }
    indeterminate(inlineLatex){
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
notANumber(inlineLatex, numerator){
    var concept=[]
    concept.push(inlineLatex);
    concept.push(' is not a number becuase ')
    concept.push(inlineLatex);
    concept.push(' is asking you what number times 0 gives you '+numerator+' and no number can be multiplied by 0 to get'+
        ' any number other than 0.');
    return concept;
}
getSimplestFormHeading='{H}Get simplest form:';

tooLargeToSimplify="Learn Math can only promise to simplify fractions "+
    "completely that are less than 10,000.  Sorry it can not promise higher.  "+
    "Still, we will try to simplify with the primes that we have available and "+
    "will let you know if we manage to simplify the fraction completely.  ";

getPrimeFactors(numerator, nArray, denominator, dArray, apology){
    return apology+"The prime factors "+
    "of the numerator, "+numerator+" are "+(MathTeaching.makeListFromArray(nArray)||'none')+" and the prime factors "+
    " of the denominator, "+
    denominator+" are "+(MathTeaching.makeListFromArray(dArray)||'none')+".  Primes are the smallest numbers you can "+
    "divide up the numerator and denominator into  and still get whole numbers.";
}
zeroNumerator="If the numerator is 0 and the denominator is not 0, then the value is 0"+
" divided by anything other than 0 is always 0.";
oneAsDenominator="If the denominator is one, and the numerator is not 0, the value of "+
"the fraction is just the number that the numerator is, as it is just divided by one, "+
"which goes in the number of times of the numerator.  ";

tellPrimesInCommon(primes){
    return 'They have '+primes+' prime factors in common.  ';
}
tellGCF(gcf){
    return 'Therefore, the greatest common factor '+
    'is the product of them'+gcf+'.  ';
}

tellReducedForm(numerator, denominator, gcf){
    return 'To get the reduced form, divide both the numerator, '+numerator+
    ', and the denominator, '+denominator+', by '+gcf+'.  Becuase this is '+
    'still greater than 10,000, we cannot promise that we have reduced it completely, '+
    'as we only use primes up through 10,000.  ';
}

tellSimplifiedForm(numerator, denominator, gcf){
    return 'To get the simplified form, divide both the numerator, '+numerator+
    ', and the denominator, '+denominator+', by the greatest common factor, '+gcf+'.  ';
}

simplestFormHeading='{H}Simplest Form:';

reducedFormHeading='{H}Reduced Form';

}
export default new FractionTeaching();