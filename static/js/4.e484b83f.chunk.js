(this.webpackJsonpmathstudent=this.webpackJsonpmathstudent||[]).push([[4,6],{65:function(t,e,n){"use strict";n.r(e);var o=n(18),r=n(68),i=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"normalizeFractionPairs",value:function(t){console.log("abcd"+t.length);for(var e=0;e<t.length;e++)void 0===t[e]&&(t[e]="");for(var n=0;n<t.length-1;n+=2)try{t[n]=parseInt(t[n]),t[n+1]=parseInt(t[n+1]),t[n]>0&&t[n+1]<0&&(t[n]*=-1,t[n+1]*=-1)}catch(o){}return console.log("in normalize"+t),t}}]),t}();e.default=i},66:function(t,e,n){"use strict";n.r(e),n.d(e,"fractionLatex",(function(){return S}));var o=n(18),r=n(68),i=n(70),a=n(69),c=n(71),s=new(function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).tooLargeToSimplify="{str}Sorry, but Math Teacher does not work when numbers     used in the problem are greater than 100,000,000.",t.tellSimplestFormHeading="{h}Simplest Form",t.tryToSimplifyHeading="{h}Try to simplify",t.tryToSimplify="{str}To simplify a fraction, try to find all the numbers that   both the numerator and denominator are divisible by.  Since these numbers are   divided by themselves in the fraction, dividing the numerator and denominator   by them is the same as dividing by 1, so it does not change the value of the   fraction.  ",t.tellNeedToSimplifyFirst="{str}Because no Lowest Common Denominator (LCD) is obvious, we must find       one.  However, as working with big numbers is harder than working       with smaller numbers, we will find out if we can simplify our fractions first.  ",t.forTheFirstFraction="{h}For the first fraction, we have:",t.forTheSecondFraction="{h}For the second fraction, we have:",t.itIsAlreadyInSimplestForm="{str}It is already in simplest form.  ",t.checkOutSimplifyingFractions="{str}If you don't know why, check out Simplify a Fraction   for this fraction.  ",t.needLCD="{h}So now we need to find the LCD.",t.solutionHeading="{h}The solution is:",t.objectName="Fraction",t.displayNameSingular="Fraction",t.singularLowerCase="fraction",t.displayNamePlural="Fractions",t.pluralLowerCase="fractions",t.methods=[["Create a fraction with a numerator and a denominator","fromNumeratorAndDenominator","numerator","integer","denominator","integer"],["Create a fraction from an integer","fromInteger","integer","integer"],["Add a fraction to a fraction","addAFraction","first numerator","integer","first denominator","integer","second numerator","integer","second denominator","integer"]],t}return Object(r.a)(n,[{key:"fractionDescription",value:function(t,e){return"begin fraction     ".concat(t," over ").concat(e," end fraction")}},{key:"fromNumeratorAndDenominator",value:function(t,e,n){return void 0===t||void 0===e||void 0===n?["{history}","{str}You create a fraction from a numerator and a denominator by     placing the numerator above the denominator, with a horizontal bar     between them.","{br}","{str}They look like this:","{$bl}\\frac{\\textrm{numerator}}{\\textrm{denominator}}{$bl}begin fraction         numerator over denominator end fraction","{str}For example, 2 over 5 looks like this:","{$bl}\\frac{2}{5}{$bl}begin fraction         2 over 5 end fraction",this.tryToSimplifyHeading,"{str}You should try to simplify fractions once you create them.  This way,         it is easier to tell their value as simplified fractions are simpler         than unsimplified fractions.","{br}","{str}If a fraction is 0 over 0, it cannot         be simplified, as, as discussed in fraction's page, it is indeterminate, and, if         it is any other number over 0, it is undefined, and also cannot be simplified,         which is also discussed in fraction's page.  However, any other pair of         numerator and denominator might be simplifiable.  ","{br}","{str}The numerator and denominator         can be rewritten as a product of their numbers found in their prime factorization,         the smallest numbers that they can be divided up into.           A prime factor is divisble by only 1 and itself.          Once you know the numbers from the prime factorization of a fraction, you can         if the numerator and denominator have any in common.  If they do, you can divide both the numerator         and denominator by these prime factors, as they divide out to be equal to 1,         and any number times 1 is itself, so by dividing both the numerator and denominator         by them, we do not change the value of the fraction, as we just are dividing by         one.  We then just multiply the remaining prime factors in the numerator and         denominator to get a single number for each.  Then the fraction is in         simplest form.  ","{br}","{str}For example, if we have 4 over 8 (four eigths), the prime factorization of         4 results in 2 times 2 and the prime factorization of 8 results in 2 times 2         times 2.  Because they have 2 times 2 in common, we can divide out 4 from both         the numerator and denominator to get to 1 over 2         (1 half)","{br}","{str}The fraction is not simplifiable if it is indeterminate, undefined,         or if its numerator and denominator have no prime factors in common.  Then it is         already in simplest form.","{br}","{str}If either the numerator or the denominator is divisble         by the other, you can simply divide them both by it.  Then prime factorization is         not needed to make sure all primes in common are found."]:isNaN(t)||isNaN(e)?["{h}Bad input","{str}Sorry, but Math Teacher's lesson for fractions expects\n           your inputs to be counting numbers, 0 or negative numbers."]:["{history}","{str}In this case, the numerator is ".concat(t," and the           denominator is ").concat(e,", so you have ").concat(t," over           ").concat(e,", which is the following:"),"{$bl}".concat(n,"{$bl}begin fraction           ").concat(t," over ").concat(e," end fraction")]}},{key:"indeterminate",value:function(t){return["{h}The value of the fraction of 0 over 0 is indeterminate","{$il}".concat(t,"{$il}begin fraction       0 over 0 end fraction"),"{str} is indeterminate.  You cannot tell the value of ","{$il}".concat(t,"{$il}begin fraction       0 over 0 end fraction"),"{str} as fractions just represent division of the numerator by the       denominator so it's value is the number that multiplies by 0       (the denominator) to get 0 (the numerator),       but that is any number, because any number times 0 is 0."]}},{key:"undefinedAddition",value:function(t){return[t,"{h}is undefined.","{str}Because any non-zero number over 0 is undefined, we cannot determine the value of this.  Check out About Fractions Fractions' Page to learn why."]}},{key:"indeterminateAddition",value:function(t){return["{h}We cannot determine the value of",t,"{str}Because 0 over 0 is indeterminate, we cannot determine the value of this.  Check out About Fractions in Fractions' Page to learn why."]}},{key:"undefined",value:function(t,e){return["{h}The value of the fraction of ".concat(t," over 0 is undefined"),"{$il}".concat(e,"{$il}begin fraction       ").concat(t," over 0 end fraction"),"{str} is undefined, as are all non-zero numbers divided by 0, \n      as fractions just represent division of the       numerator by the denominator so this fraction's value is the number that       multiplies by 0 (the denominator) to get ".concat(t,",       but no number times 0 equals anything other than 0, as 0 multiplied by any       number is 0.")]}},{key:"numeratorEqualsDenominator",value:function(t,e,n){return[this.tryToSimplifyHeading,"{$il}".concat(n,"{$il}begin fraction       ").concat(t," over ").concat(e," end fraction"),"{str} has the value of 1, as any number divided by itself is 1."]}},{key:"numeratorModDenominatorIs0",value:function(t,e,n){return[this.tryToSimplifyHeading,this.tryToSimplify,"{br}","{str}Because both the numerator ".concat(t," and the denominator ").concat(e,"       are divisble by the denominator ").concat(e,", divide the numerator       ").concat(t," by the denominator ").concat(e," to get ").concat(n,".        Since a fraction is just division, it simplifies to ").concat(n,".        The fraction simplifies to:"),"{$bl}".concat(n,"{$bl}newNumerator")]}},{key:"denominatorModNumeratorIs0",value:function(t,e,n,o){return[this.tryToSimplifyHeading,this.tryToSimplify,"{br}","{str}Because both the denominator ".concat(e," and numerator ").concat(t,"       are divisble by the numerator ").concat(t,", divide the denominator ").concat(e,"       by the numerator ").concat(t," to get ").concat(o," and the numerator       ").concat(t," by ").concat(t," to get 1.  The fraction simplifies to:"),"{$bl}".concat(n,"{$bl}begin fraction       1 over ").concat(o," end fraction")]}},{key:"denominatorIs1",value:function(t,e){return[this.tryToSimplifyHeading,"{str}Whenever the denominator is 1, the fraction can be rewritten       as just a regular number, as any number divided by 1 is itself.  ","{$il}".concat(e,"{$il}begin fraction           ").concat(t," over one end fraction"),"{str} simplifies to just ".concat(t,".")]}},{key:"numeratorIs1",value:function(t,e){return[this.tryToSimplifyHeading,"{str}When the numerator is 1, but the denominator is not 1 or 0, the fraction       is unsimplifiable because you cannot cancel out any primes with the denominator       as the numerator is as small as it can be.","{br}","{str}So simplest form is just","{$il}".concat(e,"{$il}begin fraction       ").concat(t," over one end fraction"),"{str}."]}},{key:"getPrimeFactors",value:function(t,e,n,o){return[this.tryToSimplifyHeading,"{br}",this.tryToSimplify,"{br}","{str}You can see if your fraction is simplifable by seeing if its numerator       and denominator have primes in common using Prime Factorization.  ","{br}","{str}Please check out Primes and Prime Factorization if you are not familiar       with these topics.","{br}","{str}Basically, primes are divisble by       only themselves and 1, and prime factorization gives you all the primes       that a number is divisble by.  Because primes are the smallest whole numbers       you can divide a number into, if their are numbers can be divided out, they       are prime or can be divided into primes.  The prime ".concat(1===e.length?"factor":"factors","       of the numerator, ").concat(t,", ").concat(1===e.length?"is just":"are","       ").concat(c.a.makeListFromArray(e),", and the prime ").concat(1===o.length?"factor":"factors","       of the denominator, ").concat(n,", ").concat(1===o.length?"is just":"are","       ").concat(c.a.makeListFromArray(o),".")]}},{key:"tellPrimesInCommon",value:function(t){return"{str}They have prime ".concat(1===t.length?"factor":"factors","       ").concat(c.a.makeListFromArray(t)," in common.")}},{key:"tellNoPrimesInCommon",value:function(){return"{str}Because this fraction's numerator and denominator have no prime factors       in common, the fraction cannot be simplified."}},{key:"tellGCF",value:function(t,e){return"{str}Therefore, the greatest common factor ".concat(e?"is the product of the common factors,":"is just"," ").concat(t,".")}},{key:"divideByGCF",value:function(t,e,n,o,r){return"{str}Dividing both the top and bottom by the GCF doesn't change the value of the       fraction, as divding by GCF over the GCF is the same as dividing by 1,       and anything divided by 1 is itself.        The results are numerator ".concat(t," divided by ").concat(n," is ").concat(o,"       and denominator ").concat(e," divided by ").concat(n," is ").concat(r,".")}},{key:"tellFraction",value:function(t,e,n){return"{$bl}".concat(n,"{$bl}begin fraction       ").concat(t," over ").concat(e," end fraction")}},{key:"tellSimplificationToFraction",value:function(t,e,n,o,r,i){return"{$bl}".concat(r,"=").concat(i,"       {$bl}").concat(this.fractionDescription(t,e)," equals       ").concat(this.fractionDescription(n,o))}},{key:"tellSimplificationToInteger",value:function(t,e,n,o){return"{$bl}".concat(n,"=").concat(o,"       {$bl}").concat(this.fractionDescription(t,e)," equals       ").concat(o)}},{key:"fromInteger",value:function(t,e){return void 0===t||void 0===e?["{str}You create a fraction from an integer by simply placing the integer         over 1, seprated by a horizontal bar, as any number divided by 1         is itself, so you will not change the value of the integer but you         will get a numerator over a denominator, which is what you need to         have to have a fraction.  ","{$bl}\\text{integer}=\\frac{\\text{integer}}{1}{$bl}integer equals ".concat(this.fractionDescription("integer","1")," "),"{str}For example, 5 can be written as 5 over 1.","{$bl}5=\\frac{5}{1}{$bl}".concat(this.fractionDescription("5","1")," ")]:isNaN(t)?["{h}Bad input","{str}Sorry, but Math Teacher's lesson for fractions expects\n           your inputs to be counting numbers, 0 or negative numbers."]:["{str}In this case, the integer is ".concat(t," and we want to         convert it to a fraction.  Since any number divided by 1 is just itself,         we can just put ").concat(t," over 1 and it will have the same value.          Therefore, we have:"),"{$bl}".concat(e,"{$bl}begin fraction       ").concat(t," over 1 end fraction")]}},{key:"addAFraction",value:function(t,e,n,o,r){return void 0===t||void 0===e||void 0===n||void 0===o||void 0===r?["{h}Find a common denominator","{str}To add a fraction to a fraction, you must first manipulate them         to have common denominators.  This is because the numerators can then         be summed together because you will be summing quantities of the same         value.  To get a common denominator, you can use prime factorization,         and some multiplication of the results to get the smallest possible         common denominator, known as the Least Common Denominator or LCD.          The LCD will be the Lowest Common Multiple (LCM) of the denominators.  This way,\n        both denominators will be divisble by it, as it is a multiple of them, \n        but it won't be larger than it has to be, as it is the lowest common \n        multiple of them, meaning the smallest common multiple.          It's easiest to learn how with an example.  If you are trying to get         the LCM of 4 and 6, you get 2 and 2 as the results of the prime factorization         of 4 and 2 and 3 as the reuslts of the prime factorization of 6.  You need         all the factors to appear the greatest time they appear in any one of the         numbers, so that the LCM will be divisble by all factors of all numbers.          Therefore, you need two 2s, because the greatest number of times 2 appears         in any of the numbers prime factorizations is twice, and one 3, because the         greatest number of times 3 appears in any of the numbers prime factorizations         is once.  The LCM is what you get multiplying these all together.  You get 2         times 2 times 3, which is 12.  Therefore, any fractions with denominators 4         and 6 have an LCD of 12, as the LCD will be the LCM of the denominators.","{h}Manipulate both fractions to have the common denominator","{str}For each fraction, get the number that is the common denominator divided by         the current denominator.  Then, multiply both the numerator and denominator by         this value, which is like multiplying by 1 as it is a fraction consisting of         one value above itself.  Then each fraction will have the LCD.","{h}Add the fractions with common denominators","{str}Once you have fractions with common denominators, the numerators keep track         of quantties of the same value, so you can just add the numerators together,         keeping the common denominator."]:this.initAddAFraction(t)}},{key:"tellBadInput",value:function(){return["{h}Bad input","{str}Sorry, but Math Teacher's lesson for fractions expects          your inputs to be counting numbers, 0 or negative numbers."]}},{key:"initAddAFraction",value:function(t,e,n,o,r){return["{str}So we are trying to solve:","{$bl}".concat(r,"{$bl}").concat(this.fractionDescription(t,e),"         plus ").concat(this.fractionDescription(n,o))]}},{key:"addAFractionProblem",value:function(t,e,n,o,r){return"{$bl}".concat(r,"{$bl}").concat(this.fractionDescription(t,e),"         plus ").concat(this.fractionDescription(n,o))}},{key:"fromNumeratorAndDenominatorProblem",value:function(t,e,n){return"{$bl}".concat(n,"{$bl}").concat(this.fractionDescription(t,e))}},{key:"fromIntegerProblem",value:function(t){return"{$bl}".concat(t,"{$bl}").concat(t)}},{key:"lookAtYourFirstFraction",value:function(t,e,n){return["{h}Take a look at your first fraction:","{$bl}".concat(n,"{$bl}").concat(this.fractionDescription(t,e))]}},{key:"lookAtYourSecondFraction",value:function(t,e,n){return["{h}Take a look at your second fraction:","{$bl}".concat(n,"{$bl}").concat(this.fractionDescription(t,e))]}},{key:"denominatorIsTheSame",value:function(t){return["{str}Because the two fractions already have the same denominator,   ".concat(t,", it is the Lowest Common Denominator (LCD), as it is the   smallest number that is divisble by both denominators.")]}},{key:"denomIsDivisbleByOtherDenom",value:function(t,e){return["{str}Because the denominator, ".concat(t,", is divisble by     denominator, ").concat(e,", ").concat(t," is the Lowest Common Denominator     (LCD), as it is the smallest number that is divisble by both     denominators.  This is because it is the smallest number that is divsible     by the denominator ").concat(t,".  That denominator, ").concat(t,", is already     divisible by ").concat(e,".")]}},{key:"tellLCD",value:function(t){return["{h}The LCD is:","{$bl}".concat(t,"{$bl}").concat(t)]}},{key:"tellAddNumerators",value:function(t,e,n,o,r,i){return["{str}Because the fractions have a common denominator, ".concat(t,",     we can just add the numerators, ").concat(e," and ").concat(n,",     as they are keeping track of how many we have of fractions of the same size.\n    We have ").concat(e," plus ").concat(n,", all over ").concat(t,"."),"{$bl}".concat(o,"=").concat(r,"{$bl}begin fraction ").concat(e," plus ").concat(n,"     over ").concat(t," end fraction equals begin fraction ").concat(i,"     over ").concat(t," end fraction")]}},{key:"tellInteger",value:function(t){return"{$bl}".concat(t,"{$bl}").concat(t)}},{key:"multiplyFractionsByMultiple",value:function(t,e,n,o,r,i,a){return["{str}We must get","{$bl}".concat(t,"{$bl}").concat(this.fractionDescription(n,o)),"{str}over the LCD ".concat(a,". "),"{br}","{str}We do this by dividing the LCD, ".concat(a,", by the denominator, ").concat(o,",         to get ").concat(r,", which         we multiply both the numerator and the denominator by.  This way they divide         out to get the original fraction, so we have not changed the value of the         fraction.  We then will have an equal fraction with the LCD.          Here is the multiplication:"),"{$bl}".concat(e,"{$bl}").concat(this.fractionDescription("".concat(n," times ").concat(r),"".concat(o," times ").concat(r)),"           equals ").concat(this.fractionDescription(i,a))]}},{key:"tellPrimesUnion",value:function(t,e,n,o,r,i){return["{str}To get the LCD, we first need to find all the prime factors of     the two denominators, as they are used in getting the LCD.  The LCD     needs to be a product that is gotten by including each of these prime factors,\n    including duplicates, but not counting them twice for every time they appear     as factors of both denominators.  This way, both denominators will be divisble     by this product, as it will have all the factors of each multiplied together.      The prime     ".concat(1===e.length?"factor":"factors"," of the     denominator ").concat(t," ").concat(1===e.length?"is just":"are","     ").concat(c.a.makeListFromArray(e),".     The prime     ").concat(1===o.length?"factor":"factors"," of the     denominator ").concat(n," ").concat(1===o.length?"is just":"are","     ").concat(c.a.makeListFromArray(o),".  If you get each prime the greatest     number of times it goes into any denominator, you get "),"{str}".concat(c.a.makeListFromArray(r),".  This way, the product of     these primes will be divisble by all the denominators, as it will be divisble by     all you multiply together to get each of denominators.  These primes multiply     together to get the LCD, ").concat(i,".")]}}]),n}(c.a)),u=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217,1223,1229,1231,1237,1249,1259,1277,1279,1283,1289,1291,1297,1301,1303,1307,1319,1321,1327,1361,1367,1373,1381,1399,1409,1423,1427,1429,1433,1439,1447,1451,1453,1459,1471,1481,1483,1487,1489,1493,1499,1511,1523,1531,1543,1549,1553,1559,1567,1571,1579,1583,1597,1601,1607,1609,1613,1619,1621,1627,1637,1657,1663,1667,1669,1693,1697,1699,1709,1721,1723,1733,1741,1747,1753,1759,1777,1783,1787,1789,1801,1811,1823,1831,1847,1861,1867,1871,1873,1877,1879,1889,1901,1907,1913,1931,1933,1949,1951,1973,1979,1987,1993,1997,1999,2003,2011,2017,2027,2029,2039,2053,2063,2069,2081,2083,2087,2089,2099,2111,2113,2129,2131,2137,2141,2143,2153,2161,2179,2203,2207,2213,2221,2237,2239,2243,2251,2267,2269,2273,2281,2287,2293,2297,2309,2311,2333,2339,2341,2347,2351,2357,2371,2377,2381,2383,2389,2393,2399,2411,2417,2423,2437,2441,2447,2459,2467,2473,2477,2503,2521,2531,2539,2543,2549,2551,2557,2579,2591,2593,2609,2617,2621,2633,2647,2657,2659,2663,2671,2677,2683,2687,2689,2693,2699,2707,2711,2713,2719,2729,2731,2741,2749,2753,2767,2777,2789,2791,2797,2801,2803,2819,2833,2837,2843,2851,2857,2861,2879,2887,2897,2903,2909,2917,2927,2939,2953,2957,2963,2969,2971,2999,3001,3011,3019,3023,3037,3041,3049,3061,3067,3079,3083,3089,3109,3119,3121,3137,3163,3167,3169,3181,3187,3191,3203,3209,3217,3221,3229,3251,3253,3257,3259,3271,3299,3301,3307,3313,3319,3323,3329,3331,3343,3347,3359,3361,3371,3373,3389,3391,3407,3413,3433,3449,3457,3461,3463,3467,3469,3491,3499,3511,3517,3527,3529,3533,3539,3541,3547,3557,3559,3571,3581,3583,3593,3607,3613,3617,3623,3631,3637,3643,3659,3671,3673,3677,3691,3697,3701,3709,3719,3727,3733,3739,3761,3767,3769,3779,3793,3797,3803,3821,3823,3833,3847,3851,3853,3863,3877,3881,3889,3907,3911,3917,3919,3923,3929,3931,3943,3947,3967,3989,4001,4003,4007,4013,4019,4021,4027,4049,4051,4057,4073,4079,4091,4093,4099,4111,4127,4129,4133,4139,4153,4157,4159,4177,4201,4211,4217,4219,4229,4231,4241,4243,4253,4259,4261,4271,4273,4283,4289,4297,4327,4337,4339,4349,4357,4363,4373,4391,4397,4409,4421,4423,4441,4447,4451,4457,4463,4481,4483,4493,4507,4513,4517,4519,4523,4547,4549,4561,4567,4583,4591,4597,4603,4621,4637,4639,4643,4649,4651,4657,4663,4673,4679,4691,4703,4721,4723,4729,4733,4751,4759,4783,4787,4789,4793,4799,4801,4813,4817,4831,4861,4871,4877,4889,4903,4909,4919,4931,4933,4937,4943,4951,4957,4967,4969,4973,4987,4993,4999,5003,5009,5011,5021,5023,5039,5051,5059,5077,5081,5087,5099,5101,5107,5113,5119,5147,5153,5167,5171,5179,5189,5197,5209,5227,5231,5233,5237,5261,5273,5279,5281,5297,5303,5309,5323,5333,5347,5351,5381,5387,5393,5399,5407,5413,5417,5419,5431,5437,5441,5443,5449,5471,5477,5479,5483,5501,5503,5507,5519,5521,5527,5531,5557,5563,5569,5573,5581,5591,5623,5639,5641,5647,5651,5653,5657,5659,5669,5683,5689,5693,5701,5711,5717,5737,5741,5743,5749,5779,5783,5791,5801,5807,5813,5821,5827,5839,5843,5849,5851,5857,5861,5867,5869,5879,5881,5897,5903,5923,5927,5939,5953,5981,5987,6007,6011,6029,6037,6043,6047,6053,6067,6073,6079,6089,6091,6101,6113,6121,6131,6133,6143,6151,6163,6173,6197,6199,6203,6211,6217,6221,6229,6247,6257,6263,6269,6271,6277,6287,6299,6301,6311,6317,6323,6329,6337,6343,6353,6359,6361,6367,6373,6379,6389,6397,6421,6427,6449,6451,6469,6473,6481,6491,6521,6529,6547,6551,6553,6563,6569,6571,6577,6581,6599,6607,6619,6637,6653,6659,6661,6673,6679,6689,6691,6701,6703,6709,6719,6733,6737,6761,6763,6779,6781,6791,6793,6803,6823,6827,6829,6833,6841,6857,6863,6869,6871,6883,6899,6907,6911,6917,6947,6949,6959,6961,6967,6971,6977,6983,6991,6997,7001,7013,7019,7027,7039,7043,7057,7069,7079,7103,7109,7121,7127,7129,7151,7159,7177,7187,7193,7207,7211,7213,7219,7229,7237,7243,7247,7253,7283,7297,7307,7309,7321,7331,7333,7349,7351,7369,7393,7411,7417,7433,7451,7457,7459,7477,7481,7487,7489,7499,7507,7517,7523,7529,7537,7541,7547,7549,7559,7561,7573,7577,7583,7589,7591,7603,7607,7621,7639,7643,7649,7669,7673,7681,7687,7691,7699,7703,7717,7723,7727,7741,7753,7757,7759,7789,7793,7817,7823,7829,7841,7853,7867,7873,7877,7879,7883,7901,7907,7919,7927,7933,7937,7949,7951,7963,7993,8009,8011,8017,8039,8053,8059,8069,8081,8087,8089,8093,8101,8111,8117,8123,8147,8161,8167,8171,8179,8191,8209,8219,8221,8231,8233,8237,8243,8263,8269,8273,8287,8291,8293,8297,8311,8317,8329,8353,8363,8369,8377,8387,8389,8419,8423,8429,8431,8443,8447,8461,8467,8501,8513,8521,8527,8537,8539,8543,8563,8573,8581,8597,8599,8609,8623,8627,8629,8641,8647,8663,8669,8677,8681,8689,8693,8699,8707,8713,8719,8731,8737,8741,8747,8753,8761,8779,8783,8803,8807,8819,8821,8831,8837,8839,8849,8861,8863,8867,8887,8893,8923,8929,8933,8941,8951,8963,8969,8971,8999,9001,9007,9011,9013,9029,9041,9043,9049,9059,9067,9091,9103,9109,9127,9133,9137,9151,9157,9161,9173,9181,9187,9199,9203,9209,9221,9227,9239,9241,9257,9277,9281,9283,9293,9311,9319,9323,9337,9341,9343,9349,9371,9377,9391,9397,9403,9413,9419,9421,9431,9433,9437,9439,9461,9463,9467,9473,9479,9491,9497,9511,9521,9533,9539,9547,9551,9587,9601,9613,9619,9623,9629,9631,9643,9649,9661,9677,9679,9689,9697,9719,9721,9733,9739,9743,9749,9767,9769,9781,9787,9791,9803,9811,9817,9829,9833,9839,9851,9857,9859,9871,9883,9887,9901,9907,9923,9929,9931,9941,9949,9967,9973],m=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"absoluteValue",value:function(t){return t<0?-t:t}},{key:"absoluteValueIsEqualOrLessThan",value:function(e,n){return t.absoluteValue(e)<=n}}]),t}(),l=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"absVal100_000_000OrLess",value:function(t){return m.absoluteValueIsEqualOrLessThan(t,1e8)}},{key:"getPrimeFactorsUnder100_000_000",value:function(t){t=m.absoluteValue(t);for(var e=u,n=[],o=0;e[o]<=t;){for(;t%e[o]===0;)n.push(e[o]),t/=e[o];o++}return 1!==t&&n.push(t),n}},{key:"isPrime",value:function(){return 0===t.getPrimeFactorsUnder100_000_000.length}}]),t}(),f=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"getProductOfList",value:function(t){for(var e=1,n=0;n<t.length;n++)e*=t[n];return e}}]),t}(),h=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"elementsNoDuplicatesInCommon",value:function(e,n){var o=e.slice(),r=n.slice(),i=t.elementsInCommon(o,r);return i.forEach((function(t){-1!==o.indexOf(t)&&o.splice(o.indexOf(t),1)})),i.forEach((function(t){-1!==r.indexOf(t)&&r.splice(r.indexOf(t),1)})),(o=(o=o.concat(i)).concat(r)).sort(),o}},{key:"elementsInCommon",value:function(t,e){return t.length<e.length?this.elementsInCommonOrderCounts(t,e):this.elementsInCommonOrderCounts(e,t)}},{key:"elementsInCommonOrderCounts",value:function(t,e){for(var n=t.slice(),o=e.slice(),r=[],i=0;i<n.length;i++)for(var a=!0,c=0;a&&c<o.length;)n[i]===o[c]&&(r.push(o[c]),o.splice(c,1),a=!1),c++;return r}}]),t}(),d=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).latex=function(){return"\\Huge\\color{gold}"+t.basicLatex()},t.numerator=0,t.denominator=0,t}return Object(r.a)(n,[{key:"createFromNumAndDenom",value:function(t){this.numerator=parseInt(t[0]),this.denominator=parseInt(t[1])}},{key:"createFromInteger",value:function(t){parseInt(this.numerator=t[0]),parseInt(this.denominator=1)}},{key:"simplify",value:function(){var t,e=l.getPrimeFactorsUnder100_000_000(this.numerator),n=l.getPrimeFactorsUnder100_000_000(this.denominator);t=h.elementsInCommon(e,n);var o=f.getProductOfList(t);this.numerator/=o,this.denominator/=o}},{key:"basicLatex",value:function(){return"\\frac{".concat(this.numerator,"}{").concat(this.denominator,"}")}},{key:"inlineLatex",value:function(){return"{L}\\Large\\color{gold}"+this.basicLatex()}},{key:"reducedFraction",value:function(t){this.numerator=parseInt(t[0]),this.denominator=parseInt(t[1]);var e=l.getPrimeFactorsUnder10_000(this.numerator),n=l.getPrimeFactorsUnder10_000(this.denominator),o=h.elementsInCommon(e,n),r=f.getProductOfList(o);this.numerator/=r,this.denominator/=r}},{key:"findLowestCommonMultiple",value:function(t,e){}},{key:"addFraction",value:function(t){t.reducedFraction()}}]),n}((function t(){Object(o.a)(this,t)})),b={type:"int",solutions:[{function:function(t){var e="a",n="b";if(void 0!==t){for(var o=0;o<t.length;o++)void 0===t[o]&&(t[o]="");e=t[0],n=t[1]}return S(e,n)},inputs:["a","b"],type:"frac-pairs"},{function:function(){return"indeterminate"},inputs:[],type:"str"},{function:function(){return"undefined"},inputs:[],type:"str"}]},y=s,p=function(t){if(void 0===t)return[y.addAFraction()];if(k(t),0===parseInt(t[4])&&0!==parseInt(t[2])||0===parseInt(t[8])&&0!==parseInt(t[6]))return[y.undefinedAddition(y.addAFractionProblem(t[2],t[4],t[6],t[8],S(t[2],t[4])+"+"+S(t[6],t[8]))),["undefined"]];if(0===parseInt(t[4])||0===parseInt(t[8]))return[y.indeterminateAddition(y.addAFractionProblem(t[2],t[4],t[6],t[8],S(t[2],t[4])+"+"+S(t[6],t[8]))),["indeterminate"]];if(l.absVal100_000_000OrLess(parseInt(t[2]))&&l.absVal100_000_000OrLess(parseInt(t[4]))&&l.absVal100_000_000OrLess(parseInt(t[6]))&&l.absVal100_000_000OrLess(parseInt(t[8]))){var e=parseInt(t[2]),n=parseInt(t[4]),o=new d;o.createFromNumAndDenom([e,n]);var r=parseInt(t[6]),i=parseInt(t[8]),a=new d;a.createFromNumAndDenom([r,i]);var c=g(e,n,r,i),s=[];if(n===i){var u=e+r,m=new d;m.createFromNumAndDenom([u,n]),m.simplify();var b=[];b=m.numerator%m.denominator===0?[y.solutionHeading,y.tellInteger(m.numerator/m.denominator),S(m.numerator,m.denominator)]:[y.solutionHeading,y.tellFraction(m.numerator,m.denominator,S(m.numerator,m.denominator)),S(m.numerator,m.denominator)],s=[c,y.denominatorIsTheSame(n),y.tellLCD(n),y.tellAddNumerators(n,e,r,S("".concat(e,"+").concat(r),n),S(u,n),u),[y.tryToSimplifyHeading],w(u,n,m),y.tellFraction(S(u,n),u,n),b]}else{if(n%i===0){var p=n/i,I=r*p;return v(c,n,e,r,i,p,I,e+I)}if(i%n===0){var F=i/n,T=e*F;return v(c,i,r,e,n,F,T,r+T)}o.simplify(),a.simplify();var D=w(e,n,o),A=w(r,i,a),L=g(o.numerator,o.denominator,a.numerator,a.denominator),C=l.getPrimeFactorsUnder100_000_000(o.denominator),O=l.getPrimeFactorsUnder100_000_000(a.denominator),N=h.elementsNoDuplicatesInCommon(C,O),$=f.getProductOfList(N),j=$/o.denominator,P=$/a.denominator,_=j*o.numerator,B=P*a.numerator,x=_+B,H=new d;H.createFromNumAndDenom([x,$]),H.simplify(),s=[c,[y.tellNeedToSimplifyFirst,y.tryToSimplifyHeading],[y.forTheFirstFraction],D,[y.forTheSecondFraction],A,[y.needLCD],L,y.tellPrimesUnion(o.denominator,C,a.denominator,O,N,$),y.tellLCD($),y.multiplyFractionsByMultiple(S(o.numerator,o.denominator),"".concat(S("".concat(o.numerator,"\\cdot").concat(j),"".concat(o.denominator,"\\cdot").concat(j)),"\n        =").concat(S(_,$)),o.numerator,o.denominator,j,_,$),y.multiplyFractionsByMultiple(S(a.numerator,a.denominator),"".concat(S("".concat(a.numerator,"\\cdot").concat(P),"".concat(a.denominator,"\\cdot").concat(P)),"\n        =").concat(S(B,$)),a.numerator,a.denominator,P,B,$),y.tellAddNumerators($,_,B,S("".concat(_,"+").concat(B),$),S(x,$),x),[y.tryToSimplifyHeading],w(x,$,H),[y.solutionHeading,y.tellFraction(H.numerator,H.denominator,S(H.numerator,H.denominator))],[S(H.numerator,H.denominator)]]}return s}return[[y.tooLargeToSimplify]]};function v(t,e,n,o,r,i,a,c){var s=new d;return s.createFromNumAndDenom([c,e]),s.simplify(),[t,y.denomIsDivisbleByOtherDenom(e,r),y.tellLCD(e),y.multiplyFractionsByMultiple(S(o,r),"".concat(S("".concat(o,"\\cdot").concat(i),"".concat(r,"\\cdot").concat(i)),"\n        =").concat(S(a,e)),o,r,i,a,e),g(a,e,n,e),y.tellAddNumerators(e,a,n,S("".concat(a,"+").concat(n),e),S(c,e),c),[y.tryToSimplifyHeading],w(c,e,s),[y.solutionHeading,y.tellFraction(s.numerator,s.denominator,S(s.numerator,s.denominator))],[S(s.numerator,s.denominator)]]}var g=function(t,e,n,o){return y.initAddAFraction(t,e,n,o,"".concat(S(t,e),"+").concat(S(n,o)))},w=function(t,e,n){return t!==n.numerator?t%e===0?[y.tellSimplificationToInteger(t,e,S(t,e),t/e),y.checkOutSimplifyingFractions]:[y.tellSimplificationToFraction(t,e,n.numerator,n.denominator,S(t,e),S(n.numerator,n.denominator)),"{br}",y.checkOutSimplifyingFractions]:[y.tellFraction(t,e,S(t,e)),y.itIsAlreadyInSimplestForm,"{br}",y.checkOutSimplifyingFractions]};function k(t){if(void 0===t||isNaN(parseInt(t[2]))||isNaN(parseInt(t[4]))||isNaN(parseInt(t[6]))||isNaN(parseInt(t[8])))throw Error("Bad Input")}var I=s,F=function(t){var e=new d;return void 0===t?(e=void 0,[I.fromNumeratorAndDenominator()]):(T(t),e.createFromNumAndDenom([t[2],t[4]]),[I.fromNumeratorAndDenominator(parseInt(t[2]),parseInt(t[4]),S(parseInt(t[2]),parseInt(t[4]))),function(t){var e=[],n=new d;n.createFromNumAndDenom([t[0],t[1]]);var o=parseInt(t[0]),r=parseInt(t[1]);if(isNaN(o)||isNaN(r))return n=null,[];if(0===o&&0===r)return e.push(I.indeterminate(S(o,r))),e.push("indeterminate"),e;if(0===r)return e.push(I.undefined(parseInt(t[0]),S(o,r))),e.push("undefined"),e;if(1===r)return e.push(I.denominatorIs1(o,S(o,r))),e.push(S(o,1)),e;if(1===o)return e.push(I.numeratorIs1(r,S(1,r))),e.push(S(o,r)),e;if(r===o)return n.createFromNumAndDenom([1,1]),e.push(I.numeratorEqualsDenominator(o,r,S(1,1))),e.push(S(o,r)),e;if(r%o===0)return n.createFromNumAndDenom([1,r/o]),e.push(I.denominatorModNumeratorIs0(o,r,S(1,r/o),r/o)),e.push(S(1,r/o)),e;if(o%r===0)return n.createFromNumAndDenom([o/r,1]),e.push(I.numeratorModDenominatorIs0(o,r,o/r)),e.push(S(o/r,1)),e;if(l.absVal100_000_000OrLess(o)&&l.absVal100_000_000OrLess(r)){var i,a=l.getPrimeFactorsUnder100_000_000(o),c=l.getPrimeFactorsUnder100_000_000(r);i=h.elementsInCommon(a,c);var s=f.getProductOfList(i);return n.numerator/=s,n.denominator/=s,(e=I.getPrimeFactors(o,a,r,c)).push("{br}"),i.length>0?(e.push(I.tellPrimesInCommon(i)),e.push("{br}"),e.push(I.tellGCF(s,i.length>1)),e.push("{br}"),e.push(I.divideByGCF(o,r,s,n.numerator,n.denominator))):e.push(I.tellNoPrimesInCommon(i)),e.push(I.tellSimplestFormHeading),e.push(I.tellFraction(n.numerator,n.denominator,S(n.numerator,n.denominator))),e.push(S(n.numerator,n.denominator)),e}var u=[I.tryToSimplify];return u.push(I.tooLargeToSimplify),u}([t[2],t[4]])])};function T(t){if(isNaN(parseInt(t[2]))||isNaN(parseInt(t[4])))throw Error("Bad Input")}var D=s,A=function(t){return void 0===t?[D.fromInteger()]:(L(t),[D.fromInteger(parseInt(t[2]),S(parseInt(t[2]),1)),[S(t[2],1)]])};function L(t){if(void 0===t||isNaN(parseInt(t[2])))throw Error("Bad Input")}var C=function(t,e){return Math.floor(Math.random()*(e-t+1))-t},O=function(t,e,n){for(var o=[],r=0;r<t;r++)o.push(C(e,n));return o},N=n(65),S=function(t,e){return"\\frac{".concat(t,"}{").concat(e,"}")},$=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).goodInput=!1,t.goodProblemInput=!1,t.goodAnswerInput=!1,t.teaching=s,t}return Object(r.a)(n,[{key:"fromNumeratorAndDenominator",value:function(t){return this.teach(F,t)}},{key:"fromNumeratorAndDenominatorArgs",value:function(){return O(4,0,60)}},{key:"fromNumeratorAndDenominatorProblem",value:function(t){return function(t){return T(t),{problem:[["{str-c}numerator: ".concat(t[2])],["{str-c}denominator: ".concat(t[4])]],solutions:b}}(t)}},{key:"fromInteger",value:function(t){return this.teach(A,t)}},{key:"fromIntegerArgs",value:function(){return O(2,0,1e3)}},{key:"fromIntegerProblem",value:function(t){return function(t){return L(t),{problem:[["{str-c}integer: ".concat(t[2])]],solutions:b}}(t)}},{key:"addAFraction",value:function(t){return this.teach(p,t)}},{key:"addAFractionArgs",value:function(){return O(8,0,16)}},{key:"addAFractionProblem",value:function(t){return function(t){return k(t),{problem:[[y.addAFractionProblem(t[2],t[4],t[6],t[8],S(t[2],t[4])+"+"+S(t[6],t[8]))]],solutions:b}}(t)}},{key:"giveProblem",value:function(t,e){try{var n=t(e);return console.log(n),this.goodProblemInput=!0,n}catch(o){return console.log(o),[this.teaching.tellBadInput()]}}},{key:"giveAnswer",value:function(t,e){try{this.goodAnswerInput=!1;var n=t(e);return this.goodAnswerInput=!0,n}catch(o){return console.log(o),[this.teaching.tellBadInput()]}}},{key:"teach",value:function(t,e){try{var n=t(e);return console.log(n),this.goodInput=!0,n}catch(o){return console.log(o),[this.teaching.tellBadInput()]}}}]),n}(N.default);e.default=new $},68:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},69:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return function(){var e,n=o(t);if(r()){var i=o(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return a(this,e)}}n.d(e,"a",(function(){return c}))},70:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},71:function(t,e,n){"use strict";var o=n(18),r=n(68),i=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,null,[{key:"makeListFromArray",value:function(t){if(0===t.length)return"none";if(1===t.length)return t[0];for(var e="",n=0;n<t.length;n++)e+=t[n],n===t.length-2&&(e+=" and "),n<t.length-2&&(e+=", ");return e}}]),t}();e.a=i}}]);
//# sourceMappingURL=4.e484b83f.chunk.js.map