import isMobile from './utilities/IsMobile';
class InputValidator {
static latexFraction=new RegExp('^-?\\\\frac{-?\\d+}{-?\\d+}$|^-?\\d+$');
static latexFractionOnly=new RegExp('^-?\\\\frac{-?\\d+}{-?\\d+}$');
static textFraction=new RegExp('^-?\\d+\\/-?\\d+$|^-?\\d+$');
static textFractionOnly=new RegExp('^-?\\d+\\/-?\\d+$');
static integerOnly=new RegExp('^-?\\d+$');
static hasInteger=new RegExp('-?\\d+', 'g');
  static areFractions(strArray) {
    if (isMobile()){ return InputValidator.areTextFractions(strArray);
    } else { return InputValidator.areLatexFractions(strArray); } }
  static areLatexFractions(strArray) {
    for (var i=1; i<strArray.length; i++) {
      if (!InputValidator.latexFraction.test(strArray[i])){
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
        return false;
      }
      }
    }
    return true;
 }
 static areTextFractions(strArray) {
  for (var i=1; i<strArray.length; i++) {
    console.log(strArray[i]);
    if (!InputValidator.textFraction.test(strArray[i])){
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
      return false;
    }
    }
  }
  return true;
}

 static handleAttemptedFraction(str) {
   if (InputValidator.areFractions(str)) {
     return true;
   } else {
    return false;
   }
 }
}
export default InputValidator;