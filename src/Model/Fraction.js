import MathTeachingObject from "./math/MathTeachingObject";
class Fraction extends MathTeachingObject{
    numerator; denominator;
    constructor(){ super(); this.setUpTeachingObject(); }
    Fraction() { this.fromNumeratorAndDenominator=this.fromNumeratorAndDenominator;
    this.fromNumerator=fromNumerator; }
    fromNumeratorAndDenominator(numerator, denominator) {
        this.numerator=numerator; this.denominator=denominator; }
    fromNumerator(numerator){
        this.numerator=numerator; this.denominator=1; }
    toLatex(){ return '\\frac{'+this.numerator+'}{'+this.denominator+'}'; }
}
export default Fraction;