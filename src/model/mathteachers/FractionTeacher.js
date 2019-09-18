import MathTeacher from './MathTeacher';
import FractionTeaching from './mathteachings/FractionTeaching';
import Fraction from './math/Fraction'
import PrimeFactorization from './math/PrimeFactorization';
import Product from './Product';
class FractionTeacher extends MathTeacher{

    teaching=FractionTeaching;
    mathObject=Fraction
    numerator
    denominator
    simplestForm

    constructor(){ super();
        this.callingStrings=[]; this.anyNumbers=true; this.onlyFractions=false;
        this.creationMethodSignatures=this.teaching.creationMethodSignatures;
        this.instanceMethodSignatures=this.teaching.instanceMethodSignatures;
        this.description=[]; this.headings=[]; this.concepts=[]; }
    createFromNumAndDenom(args){ this.init(args)}
    createFromInteger(args){ this.init(args)}
    init(args){this.numerator=parseInt(args[0]); this.mathObject.numerator=parseInt(args[0]);
        this.denominator=parseInt(args[1]); this.mathObject.denominator=parseInt(args[1]); this.teach();}
    latex=()=>{
            return `\\Huge\\color{gold}`+this.basicLatex();
      }
      basicLatex(){
        return `\\frac{${this.numerator}}{${this.denominator}}`
      }
      inlineLatex(){
          return `{IL}\\Large\\color{gold}`+this.basicLatex();
      }
      setSimplestForm(numerator, denominator){
        this.simplestForm=`\\Large\\color{gold}\\frac{${numerator}}{${denominator}}`;
      }
    teach(){
        this.headings=[];
        this.concepts=[];
        if (this.mathObject.denominator===0&&this.mathObject.numerator===0){
            this.description=this.teaching.indeterminate(this.inlineLatex());
        }
        else if(this.mathObject.denominator===0){
            this.description=this.teaching.notANumber(this.inlineLatex(), this.mathObject.numerator);
        }
        if ( this.mathObject.numerator===0 && this.mathObject.denominator!==0){
            this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            this.concepts[0].push(this.teaching.zeroNumerator)
        }
        else if(this.mathObject.denominator===1 && this.mathObject.numerator !==0){
            this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            this.concepts[0].push(this.teaching.oneAsDenominator)
            this.concepts[0].push(`{BL}\\Huge\\color{gold}${this.mathObject.numerator}`);
        }
        else{
            this.headings.push(this.teaching.getSimplestFormHeading);
            this.concepts.push([]);
            console.log('hello and bye'+this.numerator)
            var nArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.numerator);
            var dArray=PrimeFactorization.getPrimeFactorsUnder10_000(this.denominator);
            const primes=this.mathObject.elementsInCommon(nArray, dArray);
            const gcf=Product.getProductOfList(primes);
            this.mathObject.numerator/=gcf;
            this.mathObject.denominator/=gcf;
            console.log(nArray);
            this.concepts[0].push(this.teaching.getPrimeFactors(this.numerator, nArray, 
                this.denominator, dArray));
            if (primes.length>0){
                this.concepts[0].push(this.teaching.tellPrimesInCommon(primes));
            
                
            this.concepts[0].push(this.teaching.tellGCF(gcf));
            //const reducedNumerator=this.mathObject.numerator/gcf;
            //const reducedDenominator=this.mathObject.denominator/gcf;
            if (this.mathObject.numerator<=10000||this.mathObject.denominator<=10000){
                this.concepts[0].push(this.teaching.getSimplifiedForm(this.numerator,
                    this.denominator, gcf));
                    this.concepts[0].push(this.teaching.tellSimplifiedForm(this.mathObject.numerator,
                        this.mathObject.denominator));
                    this.concepts[0].push(this.teaching.simplestFormHeading);
            } else{
                this.concepts[0].push(this.teaching.tooLargeToSimplify);
                this.concepts[0].push(this.teaching.getReducedForm(this.numerator,
                    this.denominator, gcf));
                    this.concepts[0].push(this.teaching.tellReducedForm(this.mathObject.numerator,
                        this.mathObject.denominator));
                    this.concepts[0].push(this.teaching.reducedFormHeading);
            }
        }
            else if (this.mathObject.numerator<10000 &&this.mathObject.denominator<10000){
                    this.concepts[0].push(this.teaching.tellNoPrimesInCommon());
                }
                else{
                    this.concepts[0].push(this.teaching.tooLargeToSimplify);
                }
            
            if (this.mathObject.denominator===1){
                this.concepts[0].push(`{BL}\\Huge\\color{gold}${this.mathObject.numerator}`);
            } else {
                this.concepts[0].push(`{BL}\\Huge\\color{gold}\\frac{${this.mathObject.numerator}}{${this.mathObject.denominator}}`);
            }
        }
        this.setSimplestForm(this.mathObject.numerator, this.mathObject.denominator)
        
      }
}

export default new FractionTeacher();

/*
if (this.denominator==='0'&&this.numerator==='0'){
            fractionString+=`~ is ~ indeterminate`;
        }
        else if(this.denominator==='0'){
            fractionString+=`~ is ~ not ~ a ~ number`;
        }
        return fractionString;
      }
*/