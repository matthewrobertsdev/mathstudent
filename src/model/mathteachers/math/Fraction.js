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
    elemntsInCommon(array1, array2){
        if (array1.length<array2.length){
            return this.elementsInCommonOrderCounts(array1, array2);
        } else {
            return this.elementsInCommonOrderCounts(array2, array1);
        }
    }

    elementsInCommonOrderCounts(array1, array2){
        var elementsInCommon=[];
        for (var i=0; i<array1.length; i++){
            var notDone=true;
            var c=0;
            while(notDone && c<array2.length){
                if (array1[i]===array2[c]){
                    elementsInCommon.push(array2[c]);
                    array2.splice(c, 1);
                    notDone=false;
                }
                c++
            }
        }
        return elementsInCommon;
    }
}
export default new Fraction();