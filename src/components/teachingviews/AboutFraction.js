import React from 'react'
import '../../styles/app.css'

const AboutFraction = () => {
  return (
    <span>
      <h1 className="heading">
        A fraction is a way of expressing a number as being a part of another number.
        The numerator is on top and the denominator is on the bottom, they are both
        integers (numbers with no deicmal point) and the numerator is divided
        by the denominator to give you the value of the fraction.
      </h1>
      <h1 className="heading">
        The numerator can be a part of that denominator or greater than the denominator.
        Fractions use only numbers that have nothing after the decimal point to do this.
      </h1>
      <h1 className="heading">
        If the numerator is equal to the denominator, the value of the fraction is one.
        Therefore, if we do not take into account negative signs, as the denominator
        grows, the number shrinks, and as the numerator grows, the number grows.
        Both numerator and denominator are constant for a given fraction.  If we
        ignore negative signs, if the numerator is less than the denominator, the
        number is less than one, if they are equal, it is one, and if it is greater,
        it is greater than one.
      </h1>
      <h1 className="heading">
        If the numerator divided by the denominator is a number with nothing after
        the decimal point, then the numerator is a multiple of the denominator
        and the fraction can be written as a number that is not a fraction and
        has no decimal point.
      </h1>
    </span>
  )
}
export default AboutFraction