import MathTeaching from './MathTeaching';
class LineIn2DTeaching extends MathTeaching{
    constructor(){
        super();
        this.objectName="LineIn2D";
        this.displayNameSingular="Line";
        this.displayNamePlural="Lines";
        this.creationMethodSignatures=[];
        const POINT_SLOPE=["Create a line with a slope and a point", "createPointSlope", "slope", "decimal", "x1", "decimal", "y1", "decimal"];
        this.creationMethodSignatures.push(POINT_SLOPE);
        const POINT_POINT=["Create a line with two points", "createPointPoint", "x1", "decimal", "y1", "decimal", "x2", "decimal", "y2", "decimal"];
        this.creationMethodSignatures.push(POINT_POINT);
    }
}
export default LineIn2DTeaching;