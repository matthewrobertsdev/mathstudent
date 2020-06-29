class AbosoluteValue{
    static absoluteValue(value){
        if (value<0){
            return -value;
        } else return value;
    }
    static absoluteValueIsEqualOrLessThan(input, value){
        if (AbosoluteValue.absoluteValue(input)<=value){
            return true;
        } else { return false;}
    }
}
export default AbosoluteValue;