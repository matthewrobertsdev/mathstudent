import React from 'react'
import '../../styles/app.css'
import MathJax from 'react-mathjax';
const AboutFraction = () => {
  return (
    <span>
      <h1 className='large-left-margin'>
        What They Are
      </h1>
      <h3 className="heading">
        A fraction is a way of expressing a number or mathematical expression
        as being a part of another number or mathematical expression.
        They have two mathematical expressions on top of each other, separated by a
        horizontal bar.  The number on top is called the numerator.
        The number on the bottom is called the denominator.
        The numerator is divided by the denominator to give you
        the value of the fraction.  The simplest fractions have just one number
        on top of another number.  Fractions are a way of expressing division.
      </h3>
      <h1 className='large-left-margin'>
        Their Form
      </h1>
      <h3 className='heading'>
        A fraction looks like this:
      </h3>
      <MathJax.Provider input="tex">
        <MathJax.Node className='heading' formula={`\\color{white}{\\frac{\\textrm{numerator}}{\\textrm{denominator}}}`}></MathJax.Node>
      </MathJax.Provider>
      <h1 className='large-left-margin'>
        Their Value
      </h1>
      <h3 className="heading">
        The numerator can be smaller than the denominator, greater than the denominator,
        or equal to the denominator.  When the numerator is equal to the denominator,
        the division comes out to one, so the value of the fraction is one.
      </h3>
      <h3 className="heading">
        If we do not take into account negative signs, as the denominator
        grows, the number shrinks, and as the numerator grows, the number grows.
        Both numerator and denominator are constant for a given fraction.  If we
        ignore negative signs, if the numerator is less than the denominator, the
        number is less than one, if they are equal, it is one, and if it is greater,
        it is greater than one.
      </h3>
      <h3 className="heading">
        If the numerator divided by the denominator is a number with nothing after
        the decimal point, then the numerator is a multiple of the denominator
        and the fraction can be written as a number that is not a fraction and
        has no decimal point.  In other words, it can be written as an integer.
      </h3>
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