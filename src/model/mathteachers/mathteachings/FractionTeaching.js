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
        'second denominator', 'integer']
        
      /*,
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
        */
    ]
  }

  fractionDescription(numerator, denominator) {
    return `begin fraction \
    ${numerator} over ${denominator} end fraction`
  }

  fromNumeratorAndDenominator(numerator, denominator, latex) {
    const construction = `{str}You create a fraction from a numerator and a denominator by \
    placing the numerator above the denominator, with a horizontal bar \
    between them.`
    if (numerator === undefined || denominator === undefined || latex === undefined) {
      return [
        `{history}`,
        construction,
        `{br}`,
        `{str}They look like this:`,
        `{$bl}\\frac{\\textrm{numerator}}{\\textrm{denominator}}{$bl}begin fraction \
        numerator over denominator end fraction`,
        `{str}For example, 2 over 5 looks like this:`,
        `{$bl}\\frac{2}{5}{$bl}begin fraction \
        2 over 5 end fraction`,
        this.tryToSimplifyHeading,
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
        can be rewritten as a product of their numbers found in their prime factorization,\
         the smallest numbers that they can be divided up into.  \
         A prime factor is divisble by only 1 and itself.  \
        Once you know the numbers from the prime factorization of a fraction, you can \
        if the numerator and denominator have any in common.  If they do, you can divide both the numerator \
        and denominator by these prime factors, as they divide out to be equal to 1, \
        and any number times 1 is itself, so by dividing both the numerator and denominator \
        by them, we do not change the value of the fraction, as we just are dividing by \
        one.  We then just multiply the remaining prime factors in the numerator and \
        denominator to get a single number for each.  Then the fraction is in \
        simplest form.  `,
        `{br}`,
        `{str}For example, if we have 4 over 8 (four eigths), the prime factorization of \
        4 results in 2 times 2 and the prime factorization of 8 results in 2 times 2 \
        times 2.  Because they have 2 times 2 in common, we can divide out 4 from both \
        the numerator and denominator to get to 1 over 2 \
        (1 half)`,
        `{br}`,
        `{str}The fraction is not simplifiable if it is indeterminate, undefined, \
        or if its numerator and denominator have no prime factors in common.  Then it is \
        already in simplest form.`,
        `{br}`,
        `{str}If either the numerator or the denominator is divisble \
        by the other, you can simply divide them both by it.  Then prime factorization is \
        not needed to make sure all primes in common are found.`
      ]
    } else if (isNaN(numerator) || isNaN(denominator)) {
      return (
        [
          `{h}Bad input`,
          `{str}Sorry, but Math Teacher's lesson for fractions expects
           your inputs to be counting numbers, 0 or negative numbers.`
        ]
      )
    } else {
      return (
        [
          `{history}`,
          `{str}In this case, the numerator is ${numerator} and the \
          denominator is ${denominator}, so you have ${numerator} over \
          ${denominator}, which is the following:`,
          `{$bl}${latex}{$bl}begin fraction \
          ${numerator} over ${denominator} end fraction`
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

  undefinedAddition(problemDescription){
    return ([
    problemDescription,
    `{h}is undefined.`,
  `{str}Because any non-zero number over 0 is \
undefined, we cannot determine the value of this.  Check out About Fractions Fractions' Page \
to learn why.`])
  }

  indeterminateAddition(problemDescription){
    return ([`{h}We cannot determine the value of`,
    problemDescription,
  `{str}Because 0 over 0 is \
indeterminate, we cannot determine the value of this.  Check out About Fractions in Fractions' Page \
to learn why.`])
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
      this.tryToSimplifyHeading,
      `{$il}${latex}{$il}begin fraction \
      ${numerator} over ${denominator} end fraction`,
      `{str} has the value of 1, as any number divided by itself is 1.`
    ]
    )
  }
  numeratorModDenominatorIs0(numerator, denominator, newNumerator) {
    return ([
      this.tryToSimplifyHeading,
      this.tryToSimplify,
      `{br}`,
      `{str}Because both the numerator ${numerator} and the denominator ${denominator} \
      are divisble by the denominator ${denominator}, divide the numerator \
      ${numerator} by the denominator ${denominator} to get ${newNumerator}.  \
      Since a fraction is just division, it simplifies to ${newNumerator}.  \
      The fraction simplifies to:`,
      `{$bl}${newNumerator}{$bl}newNumerator`
    ]
    )
  }

  denominatorModNumeratorIs0(numerator, denominator, latex, newDenominator) {
    return ([
      this.tryToSimplifyHeading,
      this.tryToSimplify,
      `{br}`,
      `{str}Because both the denominator ${denominator} and numerator ${numerator} \
      are divisble by the numerator ${numerator}, divide the denominator ${denominator} \
      by the numerator ${numerator} to get ${newDenominator} and the numerator \
      ${numerator} by ${numerator} to get 1.  The fraction simplifies to:`,
      `{$bl}${latex}{$bl}begin fraction \
      1 over ${newDenominator} end fraction`
    ]
    )
  }

  tooLargeToSimplify =
    `{str}Sorry, but Math Teacher does not work when numbers \
    used in the problem are greater than 100,000,000.`

  denominatorIs1(numerator, latex) {
    return [
      this.tryToSimplifyHeading,
      `{str}Whenever the denominator is 1, the fraction can be rewritten \
      as just a regular number, as any number divided by 1 is itself.  `,
      `{$il}${latex}{$il}begin fraction \
          ${numerator} over one end fraction`,
      `{str} simplifies to just ${numerator}.`
    ]
  }

  numeratorIs1(denominator, latex) {
    return [
      this.tryToSimplifyHeading,
      `{str}When the numerator is 1, but the denominator is not 1 or 0, the fraction \
      is unsimplifiable because you cannot cancel out any primes with the denominator \
      as the numerator is as small as it can be.`,
      `{br}`,
      `{str}So simplest form is just`,
      `{$il}${latex}{$il}begin fraction \
      ${denominator} over one end fraction`,
      `{str}.`,
    ]
  }

  getPrimeFactors(numerator, nArray, denominator, dArray) {
    return [
      this.tryToSimplifyHeading,
      `{br}`,
      this.tryToSimplify,
      `{br}`,
      `{str}You can see if your fraction is simplifable by seeing if its numerator \
      and denominator have primes in common using Prime Factorization.  `,
      `{br}`,
      `{str}Please check out Primes and Prime Factorization if you are not familiar \
      with these topics.`,
      `{br}`,
      `{str}Basically, primes are divisble by \
      only themselves and 1, and prime factorization gives you all the primes \
      that a number is divisble by.  Because primes are the smallest whole numbers \
      you can divide a number into, if their are numbers can be divided out, they \
      are prime or can be divided into primes.  The prime ${nArray.length === 1 ? 'factor' : 'factors'} \
      of the numerator, ${numerator}, ${nArray.length === 1 ? 'is just' : 'are'} \
      ${MathTeaching.makeListFromArray(nArray)}, and the prime ${dArray.length === 1 ? 'factor' : 'factors'} \
      of the denominator, ${denominator}, ${dArray.length === 1 ? 'is just' : 'are'} \
      ${MathTeaching.makeListFromArray(dArray)}.`
    ]
  }

  tellPrimesInCommon(primes) {
    return (
      `{str}They have prime ${primes.length === 1 ? 'factor' : 'factors'} \
      ${MathTeaching.makeListFromArray(primes)} in common.`
    )
  }
  tellNoPrimesInCommon() {
    return (
      `{str}Because this fraction's numerator and denominator have no prime factors \
      in common, the fraction cannot be simplified.`
    )
  }
  tellGCF(gcf, product) {
    return (
      `{str}Therefore, the greatest common factor ${product ? 'is the product of the common factors,' : 'is just'} ${gcf}.`
    )
  }

  divideByGCF(numerator, denominator, GCF, objectNumerator, objectDenominator) {
    return (
      `{str}Dividing both the top and bottom by the GCF doesn't change the value of the \
      fraction, as divding by GCF over the GCF is the same as dividing by 1, \
      and anything divided by 1 is itself.  \
      The results are numerator ${numerator} divided by ${GCF} is ${objectNumerator} \
      and denominator ${denominator} divided by ${GCF} is ${objectDenominator}.`
    )
  }

  tellSimplestFormHeading = `{h}Simplest Form`

  tryToSimplifyHeading = `{h}Try to simplify`

  tryToSimplify = `{str}To simplify a fraction, try to find all the numbers that \
  both the numerator and denominator are divisible by.  Since these numbers are \
  divided by themselves in the fraction, dividing the numerator and denominator \
  by them is the same as dividing by 1, so it does not change the value of the \
  fraction.  `

  tellFraction(numerator, denominator, latex) {
    return (
      `{$bl}${latex}{$bl}begin fraction \
      ${numerator} over ${denominator} end fraction`
    )
  }

  tellSimplificationToFraction(num1, denom1, num2, denom2, latex1, latex2) {
    return (
      `{$bl}${latex1}=${latex2} \
      {$bl}${this.fractionDescription(num1, denom1)} equals \
      ${this.fractionDescription(num2, denom2)}`
    )
  }

  tellSimplificationToInteger(num1, denom1, latex1, integer) {
    return (
      `{$bl}${latex1}=${integer} \
      {$bl}${this.fractionDescription(num1, denom1)} equals \
      ${integer}`
    )
  }

  fromInteger(numerator, latex) {
    if (numerator === undefined || latex === undefined) {
      return [
        `{str}You create a fraction from an integer by simply placing the integer \
        over 1, seprated by a horizontal bar, as any number divided by 1 \
        is itself, so you will not change the value of the integer but you \
        will get a numerator over a denominator, which is what you need to \
        have to have a fraction.  `,
        `{$bl}\\text{integer}=\\frac{\\text{integer}}{1}{$bl}integer equals ${this.fractionDescription(
          `integer`, `1`)} `,
        `{str}For example, 5 can be written as 5 over 1.`,
        `{$bl}5=\\frac{5}{1}{$bl}${this.fractionDescription(
          `5`, `1`)} `,
        
      ]
    }
    else if (isNaN(numerator)) {
      return (
        [
          `{h}Bad input`,
          `{str}Sorry, but Math Teacher's lesson for fractions expects
           your inputs to be counting numbers, 0 or negative numbers.`
        ]
      )
    } else {
      return [
        `{str}In this case, the integer is ${numerator} and we want to \
        convert it to a fraction.  Since any number divided by 1 is just itself, \
        we can just put ${numerator} over 1 and it will have the same value.  \
        Therefore, we have:`,
        `{$bl}${latex}{$bl}begin fraction \
      ${numerator} over 1 end fraction`
      ]
    }
  }

  addAFraction(firstNumerator, firstDenominator,
    secondNumerator, secondDenominator, latex) {
    if (firstNumerator === undefined || firstDenominator === undefined ||
      secondNumerator === undefined || secondDenominator === undefined ||
      latex === undefined) {
      return [
        `{h}Find a common denominator`,
        `{str}To add a fraction to a fraction, you must first manipulate them \
        to have common denominators.  This is because the numerators can then \
        be summed together because you will be summing quantities of the same \
        value.  To get a common denominator, you can use prime factorization, \
        and some multiplication of the results to get the smallest possible \
        common denominator, known as the Least Common Denominator or LCD.  \
        The LCD will be the Lowest Common Multiple (LCM) of the denominators.  This way,
        both denominators will be divisble by it, as it is a multiple of them, 
        but it won't be larger than it has to be, as it is the lowest common 
        multiple of them, meaning the smallest common multiple.  \
        It's easiest to learn how with an example.  If you are trying to get \
        the LCM of 4 and 6, you get 2 and 2 as the results of the prime factorization \
        of 4 and 2 and 3 as the reuslts of the prime factorization of 6.  You need \
        all the factors to appear the greatest time they appear in any one of the \
        numbers, so that the LCM will be divisble by all factors of all numbers.  \
        Therefore, you need two 2s, because the greatest number of times 2 appears \
        in any of the numbers prime factorizations is twice, and one 3, because the \
        greatest number of times 3 appears in any of the numbers prime factorizations \
        is once.  The LCM is what you get multiplying these all together.  You get 2 \
        times 2 times 3, which is 12.  Therefore, any fractions with denominators 4 \
        and 6 have an LCD of 12, as the LCD will be the LCM of the denominators.`/*It will be the product that includes all primes from both prime \
        factorizations, but using primes that appear in both once for each time they appear in \
        both and including primes that appear in only one once each as well.  \
        This way, because it will have in its product all the primes from both, \
        it will be divisble by both denominators.`*/,
        `{h}Manipulate both fractions to have the common denominator`,
        `{str}For each fraction, get the number that is the common denominator divided by \
        the current denominator.  Then, multiply both the numerator and denominator by \
        this value, which is like multiplying by 1 as it is a fraction consisting of \
        one value above itself.  Then each fraction will have the LCD.`,
        `{h}Add the fractions with common denominators`,
        `{str}Once you have fractions with common denominators, the numerators keep track \
        of quantties of the same value, so you can just add the numerators together, \
        keeping the common denominator.`
      ]
    } else {
      return this.initAddAFraction(firstNumerator)
    }
  }

  tellBadInput() {
    return (
      [
        `{h}Bad input`,
        `{str}Sorry, but Math Teacher's lesson for fractions expects \
         your inputs to be counting numbers, 0 or negative numbers.`
      ]
    )
  }

  initAddAFraction(num1, denom1, num2, denom2, latex) {
    return (
      [
        `{str}So we are trying to solve:`,
        `{$bl}${latex}{$bl}${this.fractionDescription(num1, denom1)} \
        plus ${this.fractionDescription(num2, denom2)}`
      ]
    )
  }
  addAFractionProblem(num1, denom1, num2, denom2, latex){
    return (
        `{$bl}${latex}{$bl}${this.fractionDescription(num1, denom1)} \
        plus ${this.fractionDescription(num2, denom2)}`
    )
  }
  fromNumeratorAndDenominatorProblem(num1, denom1, latex){
    return (
          `{$bl}${latex}{$bl}${this.fractionDescription(num1, denom1)}`
    )
  }
  fromIntegerProblem(integer){
    return (
          `{$bl}${integer}{$bl}${integer}`
    )
  }
  lookAtYourFirstFraction(num, denom, latex) {
    return [
      `{h}Take a look at your first fraction:`,
      `{$bl}${latex}{$bl}${this.fractionDescription(num, denom)}`
    ]
  }

  lookAtYourSecondFraction(num, denom, latex) {
    return [
      `{h}Take a look at your second fraction:`,
      `{$bl}${latex}{$bl}${this.fractionDescription(num, denom)}`

    ]
  }

  denominatorIsTheSame(denominator) {
    return [
      `{str}Because the two fractions already have the same denominator, \
  ${denominator}, it is the Lowest Common Denominator (LCD), as it is the \
  smallest number that is divisble by both denominators.`
    ]
  }

  denomIsDivisbleByOtherDenom(denom1, denom2) {
    return [
      `{str}Because the denominator, ${denom1}, is divisble by \
    denominator, ${denom2}, ${denom1} is the Lowest Common Denominator \
    (LCD), as it is the smallest number that is divisble by both \
    denominators.  This is because it is the smallest number that is divsible \
    by the denominator ${denom1}.  That denominator, ${denom1}, is already \
    divisible by ${denom2}.`
    ]
  }

  tellNeedToSimplifyFirst =
    `{str}Because no Lowest Common Denominator (LCD) is obvious, we must find \
      one.  However, as working with big numbers is harder than working \
      with smaller numbers, we will find out if we can simplify our fractions first.  `

  forTheFirstFraction = `{h}For the first fraction, we have:`

  forTheSecondFraction = `{h}For the second fraction, we have:`

  itIsAlreadyInSimplestForm = `{str}It is already in simplest form.  `

  checkOutSimplifyingFractions = `{str}If you don't know why, check out Simplify a Fraction \
  for this fraction.  `

  needLCD = `{h}So now we need to find the LCD.`

  tellLCD(lcd) {
    return [
      `{h}The LCD is:`,
      `{$bl}${lcd}{$bl}${lcd}`
    ]
  }

  tellAddNumerators(denom, numerator1, numerator2, latex1, latex2, sum) {
    return [
      `{str}Because the fractions have a common denominator, ${denom}, \
    we can just add the numerators, ${numerator1} and ${numerator2}, \
    as they are keeping track of how many we have of fractions of the same size.
    We have ${numerator1} plus ${numerator2}, all over ${denom}.`,
      `{$bl}${latex1}=${latex2}{$bl}begin fraction ${numerator1} plus ${numerator2} \
    over ${denom} end fraction equals begin fraction ${sum} \
    over ${denom} end fraction equals`
    ]
  }

  tellInteger(integer) {
    return (
      `{$bl}${integer}{$bl}${integer}`
    )
  }

  solutionHeading = `{h}The solution is:`

  /*
  multiplyFractionByMultiple(lcd, numerator, denom, factor, newNumerator, latex) {
    return (
      [
        `{str}So we must multiply the fraction that doesn't have the LCD \
       by what is needed to give it the LCD.  This is the LCD ${lcd} \
       divided by its denominator, ${denom}, which is ${factor}, which \
       we must place over itself so that when we multiply by it we will \
       just be multiplying by 1, as that is what a number (other than 0) \
       over itself simplifies to.  Here is the multiplication:`,
        `{$bl}${latex}{$bl}${this.fractionDescription(
          `${numerator} times ${factor}`, `${denom} times ${factor}`)} \
        equals ${this.fractionDescription(newNumerator, lcd)}`
      ]
    )
  }
  */

  multiplyFractionsByMultiple(latex1, latex2, numerator, denom, factor, newNumerator, lcd) {
    return (
      [
        `{str}We must get`,
        `{$bl}${latex1}{$bl}${this.fractionDescription(
          numerator, denom)} \
          equals ${this.fractionDescription(numerator, denom)}`,
        `{str}over the LCD ${lcd}. `,
          `{br}`,
        `{str}We do this by dividing the LCD, ${lcd}, by the denominator, ${denom}, \
        to get ${factor}, which \
        we multiply both the numerator and the denominator by.  This way they divide \
        out to get the original fraction, so we have not changed the value of the \
        fraction.  We then will have an equal fraction with the LCD.  \
        Here is the multiplication:`,
        `{$bl}${latex2}{$bl}${this.fractionDescription(
          `${numerator} times ${factor}`, `${denom} times ${factor}`)} \
          equals ${this.fractionDescription(newNumerator, lcd)}`
      ]

    )
  }

  tellPrimesUnion(denom1, primes1, denom2, primes2, primesUnion, lcd) {
    return [
      `{str}To get the LCD, we first need to find all the prime factors of \
    the two denominators, as they are used in getting the LCD.  The LCD \
    needs to be a product that is gotten by including each of these prime factors,
    including duplicates, but not counting them twice for every time they appear \
    as factors of both denominators.  This way, both denominators will be divisble \
    by this product, as it will have all the factors of each multiplied together.  \
    The prime \
    ${primes1.length === 1 ? 'factor' : 'factors'} of the \
    denominator ${denom1} ${primes1.length === 1 ? 'is just' : 'are'} \
    ${MathTeaching.makeListFromArray(primes1)}. \
    The prime \
    ${primes2.length === 1 ? 'factor' : 'factors'} of the \
    denominator ${denom2} ${primes2.length === 1 ? 'is just' : 'are'} \
    ${MathTeaching.makeListFromArray(primes2)}.  If you get each prime the greatest \
    number of times it goes into any denominator, you get `,/*If you get the primes from both \
    not including primes twice for appearing in both, but counting duplicates from \
    within the list of primes of each denominator, you get \*/
    `{str}${MathTeaching.makeListFromArray(primesUnion)}.  This way, the product of \
    these primes will be divisble by all the denominators, as it will be divisble by \
    all you multiply together to get each of denominators.  These primes multiply \
    together to get the LCD, ${lcd}.`
    ]
  }

}
export default new FractionTeaching();
