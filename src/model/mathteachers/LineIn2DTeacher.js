import MathTeacher from './MathTeacher';
import AboutLineIn2D from './mathteachings/aboutsections/AboutLineIn2D'
import LineIn2DTeaching from './mathteachings/LineIn2DTeaching';
class LineIn2DTeacher extends MathTeacher{
    teaching=LineIn2DTeaching
    constructor(){
        super();
        this.callingStrings=[];
        this.about=new AboutLineIn2D().about
        this.creationMethodSignatures=this.teaching.creationMethodSignatures
    }
}
export default new LineIn2DTeacher();