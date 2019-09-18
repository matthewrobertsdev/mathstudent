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
    /*if found in list2, add to return array
    and remove from both
    otherwise, just remove from first array
    while array[i]
    */
    elementsInCommon(array1, array2){
        if (array1.length<array2.length){
            return this.elementsInCommonOrderCounts(array1, array2);
        } else {
            return this.elementsInCommonOrderCounts(array2, array1);
        }
    }

    elementsInCommonOrderCounts(array1, array2){
        var a1=array1.slice(); var a2=array2.slice();
        var elementsInCommon=[];
        for (var i=0; i<a1.length; i++){
            var notDone=true;
            var c=0;
            while(notDone && c<a2.length){
                if (a1[i]===a2[c]){
                    elementsInCommon.push(a2[c]);
                    a2.splice(c, 1);
                    notDone=false;
                }
                c++
            }
        }
        return elementsInCommon;
    }
}
export default new Fraction();