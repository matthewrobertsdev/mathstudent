import MathTeaching from './MathTeaching';

class LineIn2DTeaching extends MathTeaching{

    constructor(){
        super();
        this.creationMethodSignatures=[];
        const POINT_SLOPE=["Line", "LineIn2D", "slope", "decimal", "x1", "decimal", "y1", "decimal"];
        this.creationMethodSignatures.push(POINT_SLOPE);
        const POINT_POINT=["Line", "LineIn2D", "x1", "decimal", "y1", "decimal", "x2", "decimal", "y2", "decimal"];
        this.creationMethodSignatures.push(POINT_POINT);
    }
    
}

export default LineIn2DTeaching;