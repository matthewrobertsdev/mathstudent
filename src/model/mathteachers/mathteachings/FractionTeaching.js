import MathTeaching from './MathTeaching'
class FractionTeaching extends MathTeaching {
  constructor() {
    super();
    this.objectName = "Fraction";
    this.displayNameSingular = "Fraction";
    this.singularLowerCase = "fraction";
    this.displayNamePlural = "Fractions";
    this.pluralLowerCase = "fractions";
    this.methods = [
      //create from a numerator and a denominator
      ['Create a fraction with a numerator and a denominator', 'fromNumAndDenom',
        'numerator', 'integer', 'denominator', 'integer'],
      //create from an integer
      ['Create a fraction from an integer', 'fromInteger', 'integer', 'integer'],
      //add a fraction to a fraction
      ['Add a fraction to a fraction', 'addAFraction', 'first numerator', 'integer',
      'first denominator', 'integer', 'second numerator', 'integer',
      'second denominator', 'integer'],
      //subtract a fraction from a fraction
      ['Subtract a fraction from a fraction', 'subtractAFraction', 'first numerator', 'integer',
        'first denominator', 'integer', 'second numerator', 'integer',
        'second denominator', 'integer'],
      //multiply a fraction by a fraction
      ['Multiply a fraction by a fraction', 'multiplyByAFraction', 'first numerator', 'integer',
      'first denominator', 'integer', 'second numerator', 'integer',
      'second denominator', 'integer'],
      //divide a fraction by a fraction
      ['Divide a fraction by a fraction', 'divideByAFraction', 'first numerator', 'integer',
      'first denominator', 'integer', 'second numerator', 'integer',
      'second denominator', 'integer']
    ]
  }

  indeterminate(inlineLatex) {
    var concept = []
    concept.push('You cannot tell what the value of ')
    concept.push(inlineLatex);
    concept.push(' because the numerator is divided by the denominator and ' +
      'this asks you to find what number times 0 gives you 0, ' +
      "which could be any number because 0 multiplied by any number is 0.  ");
    concept.push(inlineLatex);
    concept.push(' is called indeterminate if other information can not be used to determine its value.  ')
    return concept;
  }

  notANumber(inlineLatex, numerator) {
    var concept = []
    concept.push(inlineLatex);
    concept.push(' is not a number becuase ')
    concept.push(inlineLatex);
    concept.push(' is asking you what number times 0 gives you ' + numerator + ' and no number can be multiplied by 0 to get' +
      ' any number other than 0.  ');
    return concept;
  }
  getSimplestFormHeading = '{H}Get simplest form:';

  tooLargeToSimplify = "Math Teacher was not able to simplify either of the numerator nor denominator to less than 10,000." +
    'This has to do with the number of primes we use.  Math Teacher can only know we have simplified the fraction completely ' +
    'if we are able to simpliofy them to where one or both of them is less than 10,000.  We cannot tell you if this fraction ' +
    'is fully simplified';

  getPrimeFactors(numerator, nArray, denominator, dArray) {
    return "The prime factors " +
      "of the numerator, " + numerator + " is/are " + (MathTeaching.makeListFromArray(nArray) || 'none') + " and the prime factors " +
      " of the denominator, " +
      denominator + " is/are " + (MathTeaching.makeListFromArray(dArray) || 'none') + ".  Primes are the smallest numbers you can " +
      "divide up the numerator and denominator into  and still get whole numbers.  If you find the primes that the denominator " +
      "has in common with the numerator, dividing the denominator and numerator by them doesn't change the value of the fraction, as the " +
      "top gets smaller by the amount that the bottom, which you are dividing it by, gets smaller by as well.  So the value of "
      + "the fraction doesn't change.  ";
  }
  zeroNumerator = "If the numerator is 0 and the denominator is not 0, then the value is 0" +
    " divided by anything other than 0 is always 0.  ";
  oneAsDenominator = "If the denominator is one, and the numerator is not 0, the value of " +
    "the fraction is just the number that the numerator is, as it is just divided by one, " +
    "which goes in the number of times of the numerator.  ";

  tellPrimesInCommon(primes) {
    return 'They have  prime factor(s) ' + (MathTeaching.makeListFromArray(primes)) + ' in common.  ';
  }
  tellNoPrimesInCommon() {
    return 'For this fraction, the numerator and denominator have no prime factors in common, so it cannot be simplified';
  }
  tellGCF(gcf) {
    return 'Therefore, the greatest common factor ' +
      'is the product of them, ' + gcf + '.  ';
  }

  getReducedForm(numerator, denominator, gcf) {
    return 'To get the reduced form, divide both the numerator, ' + numerator +
      ', and the denominator, ' + denominator + ', by ' + gcf + '.  Becuase this is ' +
      'still greater than 10,000, we cannot promise that we have reduced it completely, ' +
      'as we only use primes up through 10,000.  ';
  }

  getSimplifiedForm(numerator, denominator, gcf) {
    return 'To get the simplified form, divide both the numerator, ' + numerator +
      ', and the denominator, ' + denominator + ', by the greatest common factor, ' + gcf + '.  ';
  }

  tellReducedForm(numerator, denominator) {
    return 'The result is ' + numerator + ' over ' + denominator + '.';
  }

  tellSimplifiedForm(numerator, denominator) {
    return 'The result is ' + numerator + ' over ' + denominator + '.';
  }

  simplestFormHeading = '{H}Simplest Form:';

  reducedFormHeading = '{H}Reduced Form';

}
export default new FractionTeaching();
