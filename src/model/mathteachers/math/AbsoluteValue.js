class AbosoluteValue{
    static absoluteValue(value){
        if (value<0){
            return -value;
        } else return value;
    }
    static absoluteValueIsUnder(value){
        if (AbosoluteValue.absoluteValue(value)<value){
            return true;
        } else return false;
    }
}
export default AbosoluteValue;