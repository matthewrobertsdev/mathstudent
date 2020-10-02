import FractionTeaching from './mathteachings/FractionTeaching';
import {addAFraction} from './FractionTeacherMethods/AddFractiontoFraction'
import {fromNumeratorAndDenominator} from './FractionTeacherMethods/CreatFromNumeratorAndDenominator'
import {fromInteger} from './FractionTeacherMethods/CreateFractionFromInteger'


//latex for a fraction
export const fractionLatex=(numerator, denominator) => {
  return `\\frac{${numerator}}{${denominator}}`
}

class FractionTeacher {

  goodInput=false

  //the teaching with the String functions
  teaching = FractionTeaching;

  fromNumeratorAndDenominatorProblem(args){
    const splitArgs=args.split('@')
    const num1=parseInt(splitArgs[2])
    const denom1=parseInt(splitArgs[4])
    return (
      this.teaching.fromNumeratorAndDenominatorProblem(num1, denom1,
        `${fractionLatex(num1, denom1)}`)
    )
  }

  fromIntegerProblem(args){
    const splitArgs=args.split('@')
    const integer=parseInt(splitArgs[2])
    return this.teaching.fromIntegerProblem(integer)
  }

  addAFractionProblem(args){
    const splitArgs=args.split('@')
    const num1=parseInt(splitArgs[2])
    const denom1=parseInt(splitArgs[4])
    const num2=parseInt(splitArgs[6])
    const denom2=parseInt(splitArgs[8])
    return (
      this.teaching.addAFractionProblem(num1, denom1, num2, denom2,
        `${fractionLatex(num1, denom1)}+${fractionLatex(num2, denom2)}`)
    )
  }

  fromNumeratorAndDenominator(args){
    return this.teach(fromNumeratorAndDenominator, args)
  }

  fromInteger(args){
    return this.teach(fromInteger, args)
  }

  addAFraction(args){
    return this.teach(addAFraction, args)
  }

  teach(method, args){
    try{
      const teaching=method(args)
      console.log(teaching)
      this.goodInput=true
      return teaching
    } catch(error) {
      console.log(error)
      return [this.teaching.tellBadInput()]
    }
  }

}

export default new FractionTeacher();
