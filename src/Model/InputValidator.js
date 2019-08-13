import isMobile from './utilities/IsMobile';
class InputValidator {
static latexAnyNumber=new RegExp('^-?\\\\frac{-?\\d+}{-?\\d+}$|^-?\\d+$');
static latexFractionOnly=new RegExp('^-?\\\\frac{-?\\d+}{-?\\d+}$');
static textAnyNumber=new RegExp('^-?\\d+\\/-?\\d+$|^-?\\d+$');
static textFractionOnly=new RegExp('^-?\\d+\\/-?\\d+$');
static integerOnly=new RegExp('^-?\\d+$');
static hasInteger=new RegExp('-?\\d+', 'g');
  static areIntegers(strArray){
    for (var i=1; i<strArray.length; i++) {
      if (!InputValidator.integerOnly.test(strArray[i])){
        InputValidator.hasInteger.lastIndex=0;
        return false;
      }
    }
    InputValidator.hasInteger.lastIndex=0;
    return true;
  }
  static areNumbers(strArray) {
    if (isMobile()){ return InputValidator.areTextNumbers(strArray);
    } else { return InputValidator.areLatexNumbers(strArray); } }
  static areLatexNumbers(strArray) {
    for (var i=1; i<strArray.length; i++) {
      if (!InputValidator.latexAnyNumber.test(strArray[i])){
        InputValidator.hasInteger.lastIndex=0;
        return false;
      }
      if (InputValidator.latexFractionOnly.test(strArray[i])){
        var matches=[];
        let match=null;
        do {
          match = InputValidator.hasInteger.exec(strArray[i]);
          if (match) {
            matches.push(match);
          }
      } while (match);
      if (matches[1][0]==="0"){
        InputValidator.hasInteger.lastIndex=0;
        return false;
      }
      }
    }
    InputValidator.hasInteger.lastIndex=0;
    return true;
 }
 static areTextNumbers(strArray) {
  for (var i=1; i<strArray.length; i++) {
    console.log(strArray[i]);
    if (!InputValidator.textAnyNumber.test(strArray[i])){
      InputValidator.hasInteger.lastIndex=0;
      return false;
    }
    if (InputValidator.textFractionOnly.test(strArray[i])){
      var matches=[];
      let match=null;
      do {
        match = InputValidator.hasInteger.exec(strArray[i]);
        if (match) {
          matches.push(match);
          console.log(match);
        }
    } while (match);
    if (matches[1][0]==="0"){
      InputValidator.hasInteger.lastIndex=0;
      return false;
    }
    }
  }
  InputValidator.hasInteger.lastIndex=0;
  return true;
}
}
export default InputValidator;