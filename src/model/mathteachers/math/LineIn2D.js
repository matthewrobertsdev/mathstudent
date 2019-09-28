import MathTeachingObject from './MathTeachingObject';
class LineIn2D extends MathTeachingObject{
    slope; xOfXIntercept; yOfYIntercept; slopeYInterceptForm;
    createPointSlope(slope, x1, y1){
        if(!this.checkSlope){
            return;
        } else if (slope===Number.NaN){
        } else if (slope===0) {
        } else {
        }
    }
    checkSlope(slope){
        if(slope===Number.NEGATIVE_INFINITY||slope===Number.POSITIVE_INFINITY){
            return false;
        }
        return true;
    }
}
export default LineIn2D;