import MathTeacher from './MathTeacher';
import AboutLineIn2D from '../mathteachings/aboutsections/AboutLineIn2D'
class LineIn2DTeacher extends MathTeacher{
    constructor(){
        super();
        this.objectName="LineIn2D";
        this.displayNameSingular="Line";
        this.singularLowerCase="line";
        this.displayNamePlural="Lines";
        this.pluralLowerCase="lines";
        this.callingStrings=[];
        this.creationMethodSignatures=[];
        this.anyNumbers=true;
        const POINT_SLOPE=["Create a line with a slope and a point", "createPointSlope", "slope", "number", "x1", 
        "number", "y1", "number"];
        this.creationMethodSignatures.push(POINT_SLOPE);
        const POINT_POINT=["Create a line with two points", "createPointPoint", "x1", "number", "y1", "number", 
        "x2", "number", "y2", "number"];
        this.creationMethodSignatures.push(POINT_POINT);
        this.about=new AboutLineIn2D().about

    }
}
export default new LineIn2DTeacher();