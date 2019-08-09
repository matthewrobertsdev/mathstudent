import Fraction from './Fraction';
import FractionCallObject from './FractionCallObject';
import InputValidator from './InputValidator';
class ProcessInput{
    static createFractionCallObject(callingStrings){
        return new FractionCallObject(callingStrings[0],ProcessInput.getFractions(callingStrings));
    }
    static getFractions(strArray){
        var fractions=[]
        for (var i=1; i<strArray.length; i++) {
          if (InputValidator.latexFractionOnly.test(strArray[i])){
            var matches=[];
            let match=null;
            do {
              match = InputValidator.hasInteger.exec(strArray[i]);
              if (match) {
                matches.push(match);
              }
          } while (match);
            fractions.push(new Fraction().fromNumeratorAndDenominator(parseInt(matches[0][0]),parseInt(matches[1][0])));
          } else{
            fractions.push(new Fraction().fromNumerator(parseInt(strArray[i])));
          }
        }
        return fractions;
      }
}
export default ProcessInput;