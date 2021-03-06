import React from 'react'
import '../../styles/app.css'
import MathJax from 'react-mathjax';
const AboutFraction = () => {
  return (
    <span>
      <hr/>
      <h1 className='large-left-margin'>
        What They Are
      </h1>
      <h3 className="heading">
        A fraction is a way of expressing a number or mathematical expression
        as being a part of another number or mathematical expression.
        Fractions have two mathematical expressions on top of each other, separated by a
        horizontal bar.  The expression on top is called the numerator.
        The expression on the bottom is called the denominator.
        The numerator is divided by the denominator to give you
        the value of the fraction.  The simplest fractions have just one number
        on top of another number.  Fractions are a way of expressing division.
      </h3>
      <hr/>
      <h1 className='large-left-margin'>
        Parts of a Whole
      </h1>
      <h3 className="heading">
        A fraction can be thought of as being a number of equal parts of a whole.
        The denominator says how many pieces the whole is divided into.  Once you know 
        from the denominator how many pieces the whole has been divided into, you can 
        look at the numerator to see how many of them you have.  For example, if you divide
        a loaf of bread into 16 equal slices, the denominator is 16.  If you have 3 of these 16 
        slices, the numerator is 3.  Fractions can describe less than a whole, 1 whole, 
        greater than a whole, zero out of a whole, or even a negative amount of a whole.
      </h3>
      <hr/>
      <h1 className='large-left-margin'>
        Their Form
      </h1>
      <h3 className='heading'>
        A fraction looks like this:
      </h3>
      <MathJax.Provider input="tex">
        <MathJax.Node className='heading' formula={`\\color{white}{\\frac{\\textrm{numerator}}{\\textrm{denominator}}}`}></MathJax.Node>
      </MathJax.Provider>
      <h3 className='heading'>
        For example, if you divide a loaf of bread into 12 equal slices, and you take 2 slices,
        you have 2 twelfths of the loaf.  The numerator is how many you have, and it is 2, 
        and the denominator many part of a loaf the bread has been divided into, 
        and it is 12.  So your fraction looks like this:
      </h3>
      <MathJax.Provider input="tex">
        <MathJax.Node className='heading' formula={`\\color{white}{\\frac{2}{12}}`}></MathJax.Node>
      </MathJax.Provider>
      <hr/>
      <h1 className='large-left-margin'>
        Special Cases: Division by 0 and 0 over 0
      </h1>
      <h3 className="heading">
        When the denominator is 0, we have division by 0 and we have to be a
        little bit careful.  The result of any number other than 0 divided by 0
        is undefined, as to divide a number you must find the number that you multiply
        that number by to get the original number and 0 times any number is 0, so the only
        number we can get is 0.  For example, if we divide 5 by 0, we are asking what number
        times 0 equals 5.  Therefore, we say that 5 over 0 is 
        undefined.  This is true for all numbers divide by 0 except 0.  Unless the 
        numerator is 0, no 0 denominator can multiply by a number to
        equal the numerator, so we cannot find a number for the value of the fraction so
        we say the fraction is undefined.
      </h3>
      <h3 className="heading">
        In the case of 0 for the numerator with 0 for the denominator, until we have 
        more information we don't know what the value of the fraction is, as any 
        number times 0 is 0.  Mathematicians say that 0 over 0 without more 
        information is indeterminate.
      </h3>
      <hr/>
      <h1 className='large-left-margin'>
        Fractions' Value
      </h1>
      <h3 className="heading">
        The numerator can be smaller than the denominator, greater than the denominator,
        or equal to the denominator.  When the numerator is equal to the denominator 
        but is not 0 over 0,
        the division comes out to one, so the value of the fraction is one.
      </h3>
      <h3 className="heading">
        If we do not take into account negative signs, as the denominator
        grows, the number shrinks, and as the numerator grows, the number grows.
        If we ignore negative signs, and have a non-zero denominator,
        if the numerator is less than the denominator, the
        fraction is less than one, if they are equal, the fraction is one, and 
        if it is greater, the fraction is greater than one.  For example, 11 
        twelfths is less than 1, as 11 is less than the number needed to have a whole,
        which is 12.  12 twelfths is exactly 1, as you have all the parts that make 
        up the whole.  15 twelfths is greater than 1 but less than 2.
      </h3>
      <h3 className="heading">
        Aside from 0 over 0, if the numerator divided by the denominator is a 
        number with nothing after the decimal point, then the numerator is a 
        multiple of the denominator and the fraction can be written as a number 
        that is not a fraction and has no decimal point.  In other words, it 
        can be written as an integer.  For example, 24 twelfths is 
        exactly 2, as the numerator divided by the denominator works out to 2, so you 
        have 2 wholes.
      </h3>
      <hr/>
      <h1 className='large-left-margin'>
        What Next?
      </h1>
      <h3 className="heading">
        Try some problems in the teachings to start learning fractions.
      </h3>
    </span>
  )
}
export default AboutFraction