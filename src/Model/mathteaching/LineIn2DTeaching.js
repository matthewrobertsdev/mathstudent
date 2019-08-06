import MathTeaching from './MathTeaching';
class LineIn2DTeaching extends MathTeaching{
    constructor(){
        super();
        this.objectName="LineIn2D";
        this.displayNameSingular="Line";
        this.displayNamePlural="Lines";
        this.creationMethodSignatures=[];
        const POINT_SLOPE=["Create a line with a slope and a point", "createPointSlope", "slope", "number", "x1", "numer", "y1", "numer"];
        this.creationMethodSignatures.push(POINT_SLOPE);
        const POINT_POINT=["Create a line with two points", "createPointPoint", "x1", "numer", "y1", "numer", "x2", "numer", "y2", "numer"];
        this.creationMethodSignatures.push(POINT_POINT);
    }
}
export default LineIn2DTeaching;