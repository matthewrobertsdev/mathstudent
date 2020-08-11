import FractionTeaching from '../mathteachings/FractionTeaching';
import {fractionLatex} from './../FractionTeacher'

const teaching = FractionTeaching;

//tells lesson or creates a fraction from an integer
export const fromInteger=(args)=> {
  if (args === undefined) {
    let initialization = teaching.fromInteger()
    let lesson = [
      initialization
    ]
    return lesson
  } else if (!isNaN(parseInt(args[2]))){
    console.log('good input')
  } else {
    throw Error("Bad Input")
  }
    let initialization = teaching.fromInteger(parseInt(args[2]), fractionLatex(parseInt(args[2]), 1))
    let lesson = [
      initialization
    ]
    return lesson
}