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
      ['Create a fraction with a numerator and a denominator', 'fromNumeratorAndDenominator',
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
        'second denominator', 'integer'],
      //add a mixed number to a fraction
      ['Add a mixed number to a fraction', 'addAMixedNumber', 'mixed number', 'mixedNumber', 'numerator', 'integer',
        'denominator', 'integer'],
      //subtract a mixed number from a fraction
      ['Subtract a mixed number from a fraction', 'subtractAMixedNumber', 'mixed number', 'mixedNumber', 'numerator', 'integer',
        'denominator', 'integer'],
      //multiply a fraction by a mixed number
      ['Multiply a fraction by a mixed number', 'multiplyByAMixedNumber', 'mixed number', 'mixedNumber', 'numerator', 'integer',
        'denominator', 'integer'],
      //divide a fraction by a mixed number
      ['Divide a fraction by a mixed number', 'divideByAMixedNumber', 'mixed number', 'mixedNumber', 'numerator', 'integer',
        'denominator', 'integer']
    ]
  }

  fromNumeratorAndDenominator(numerator, denominator, latex) {
    const construction = `{str}You create a fraction from a numerator and a denominator by \
    placing the numerator above the denominator, with a horizontal bar \
    between them.`
    if (numerator === undefined || denominator === undefined || latex === undefined) {
      return [
        construction,
        `{br}`,
        `{str}They look like this:`,
        `{$bl}\\frac{\\textrm{numerator}}{\\textrm{denominator}}{$bl}begin fraction \
        numerator over denominator end fraction`,
        `{h}Try to simplify your fraction`,
        `{str}You should try to simplify fractions once you create them.  This way, \
        it is easier to tell their value as simplified fractions are simpler \
        than unsimplified fractions.`,
        `{br}`,
        `{str}If a fraction is 0 over 0, it cannot \
        be simplified, as, as discussed in fraction's page, it is indeterminate, and, if \
        it is any other number over 0, it is undefined, and also cannot be simplified, \
        which is also discussed in fraction's page.  However, any other pair of \
        numerator and denominator might be simplifiable.  `,
        `{br}`,
        `{str}The numerator and denominator \
        can be rewritten as a product of their prime factors, the smallest numbers that \
        they can be divided up into, if they are not \
        themselves prime.  A prime factor is divisble by only 1 and itself.  \
        Once you know the prime factors of a fraction, you can see if the numerator and \
        denominator have any in common.  If they do, you can divide both the numerator \
        and denominator by these prime factors, as they divide out to be equal to 1, \
        and any number times 1 is itself, so by dividing both the numerator and denominator \
        by them, we do not change the value of the fraction, as we just are dividing by \
        one.  We then just multiply the remaining prime factors in the numerator and \
        denominator to get a single number for each.  Then the fraction is in \
        simplest form.  The fraction is not simplifiable if it is indeterminate, undefined, \
        or if its numerator and denominator have no prime factors in common.  Then it is \
        already in simplest form.`
      ]
    } else {
      return (
        [
          `{str}In this case, the numerator is ${numerator} and the \
          denominator is ${denominator}, so you have ${numerator} over \
          ${denominator}, which is the following:`,
          `{$bl}${latex}{$bl}begin fraction \
          ${numerator} over ${denominator} end fraction`,
        ]
      )
    }
  }

  indeterminate(latex) {
    return ([
      `{h}The value of the fraction of 0 over 0 is indeterminate`,
      `{$il}${latex}{$il}begin fraction \
      0 over 0 end fraction`,
      `{str} is indeterminate.  You cannot tell the value of `,
      `{$il}${latex}{$il}begin fraction \
      0 over 0 end fraction`,
      `{str} as fractions just represent division of the numerator by the \
      denominator so it's value is the number that multiplies by 0 \
      (the denominator) to get 0 (the numerator), \
      but that is any number, because any number times 0 is 0.`
    ]
    )
  }

  undefined(numerator, latex) {
    return ([
      `{h}The value of the fraction of ${numerator} over 0 is undefined`,
      `{$il}${latex}{$il}begin fraction \
      ${numerator} over 0 end fraction`,
      `{str} is undefined, as are all non-zero numbers divided by 0, 
      as fractions just represent division of the \
      numerator by the denominator so this fraction's value is the number that \
      multiplies by 0 (the denominator) to get ${numerator}, \
      but no number times 0 equals anything other than 0, as 0 multiplied by any \
      number is 0.`
    ]
    )
  }

  numeratorEqualsDenominator(numerator, denominator, latex) {
    return ([
      `{h}Try to simplify your fraction`,
      `{$il}${latex}{$il}begin fraction \
      ${numerator} over ${denominator} end fraction`,
      `{str} has the value of 1, as any number divided by itself is 1`
    ]
    )
  }

  simplify() {
    return (
      [
        `{str}We must see if we can simplify the fraction.`
      ]
    )
  }

  tooLargeToSimplify = [
    `{str}Sorry, but Math Teacher does not work with numbers \
    greater than 100,000,000.`
  ]

  denominatorIs1(numerator, latex){
    return [
      `{h}Try to simplify your fraction`,
      `{str}Whenever the denominator is 1, the fraction can be rewritten \
      as just a regular number, as any number divided by 1 is itself.`,
      `{str}  `,
      `{$il}${latex}{$il}begin fraction \
          ${numerator} over one end fraction`,
      `{str} simplifies to just ${numerator}.`
    ]
  }

  getPrimeFactors(numerator, nArray, denominator, dArray) {
    return [
      `{h}Try to simplify your fraction`,
      `{br}`,
      `{str}You can see if your fraction is simplifable by seeing if its numerator \
      and denominator have primes in common using Prime Factorization.  `,
      `{br}`,
      `{str}Please check out Primes and Prime Factorization if you are not familiar \
      with these topics.`,
      `{br}`,
      `{str}Basically, primes are divisble by \
      only themselves and 1, and prime factorization gives you all the primes \
      that a number is divisble by.  The prime ${nArray.length===1 ? 'factor' : 'factors' } \
      of the numerator, ${numerator}, ${nArray.length===1 ? 'is just' : 'are' } \
      ${MathTeaching.makeListFromArray(nArray)}, and the prime ${dArray.length===1 ? 'factor' : 'factors' } \
      of the denominator, ${denominator}, ${dArray.length===1 ? 'is just' : 'are' } \
      ${MathTeaching.makeListFromArray(dArray)}.`
    ]
  }

  tellPrimesInCommon(primes) {
    return `They have prime ${primes.length===1 ? 'factor' : 'factors' } \
    ${MathTeaching.makeListFromArray(primes)} in common.`;
  }
  tellNoPrimesInCommon() {
    return [
      `{str}Because this fraction's numerator and denominator have no prime factors \`
      in common, the fraction cannot be simplified`
    ]
  }
  tellGCF(gcf) {
    return [
      `{str}Therefore, the greatest common factor ' +
      'is the product of them, ${gcf}.`
    ]
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
