import MathTeachingObject from './MathTeachingObject';
import FractionTeaching from '.././mathteaching/FractionTeaching';
class Fraction extends MathTeachingObject{
    constructor(){
        super();
        this.setUpTeachingObject();
    }
    setUpTeachingObject(){
        this.teaching=new FractionTeaching();
    }
}
export default new Fraction();