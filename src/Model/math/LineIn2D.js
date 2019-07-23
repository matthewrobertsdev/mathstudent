import MathTeachingObject from './MathTeachingObject';
import LineIn2DTeaching from '.././mathteaching/LineIn2DTeaching';

class LineIn2D extends MathTeachingObject{
    
    constructor(){
        super();
        this.setUpTeachingObject();
    }

    setUpTeachingObject(){
        this.teaching=new LineIn2DTeaching();
    }

}

export default new LineIn2D();