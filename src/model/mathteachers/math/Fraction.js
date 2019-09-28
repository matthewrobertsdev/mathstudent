import PrimeFactorization from './PrimeFactorization';
import Product from './Product';
import ListUtility from '../../../utilities/ListUtility';
import MathTeachingObject from './MathTeachingObject';
class Fraction extends MathTeachingObject{
    constructor(){
        super();
        this.numerator=0;
        this.denominator=0;
    }
    createFromNumAndDenom(args){ this.numerator=parseInt(args[0]); 
        parseInt(this.denominator=args[1]);}
    createFromInteger(args){ parseInt(this.numerator=args[0]); 
        parseInt(this.denominator=1);}
    latex=()=>{
        return `\\Huge\\color{gold}`+this.basicLatex();
    }
    basicLatex(){
        return `\\frac{${this.numerator}}{${this.denominator}}`
    }
    inlineLatex(){
        return `{L}\\Large\\color{gold}`+this.basicLatex();
    }
    reducedFraction(args){
        this.numerator=parseInt(args[0]); 
        this.denominator=parseInt(args[1]);
        var nArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.numerator);
        var dArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.denominator);
        const primes=ListUtility.elementsInCommon(nArray, dArray);
        const gcf=Product.getProductOfList(primes);
        this.numerator/=gcf;
        this.denominator/=gcf;
    }
    findLowestCommonMultiple(a,b){
    }
    addFraction(fraction){
        fraction.reducedFraction();
    }
    /*if found in list2, add to return array
    and remove from both
    otherwise, just remove from first array
    while array[i]
    */
}
export default new Fraction();