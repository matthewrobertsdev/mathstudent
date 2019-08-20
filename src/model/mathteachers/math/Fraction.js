import MathTeachingObject from './MathTeachingObject';
class Fraction extends MathTeachingObject{
    constructor(){
        super();
        this.numerator=0;
        this.denominator=0;
    }
    createFromNumAndDenom(args){ this.numerator=parseInt(args[0]); 
        parseInt(this.denominator=args[1]); this.teach();}
    createFromInteger(args){ parseInt(this.numerator=args[0]); 
        parseInt(this.denominator=1); this.teach();}
    latex=()=>{
        return `\\Huge\\color{gold}`+this.basicLatex();
    }
    basicLatex(){
        return `\\frac{${this.numerator}}{${this.denominator}}`
    }
    inlineLatex(){
        return `{L}\\Large\\color{gold}`+this.basicLatex();
    }
    primesInCommon(array1, array2){
        
    }
}
export default new Fraction();