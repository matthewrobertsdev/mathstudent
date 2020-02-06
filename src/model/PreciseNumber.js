class PreciseNumber {
    decimalIndex=-1
    str
    constructor(str){
        if (isNaN(str)) {
            throw "Argument is not a number."
        }
        for (var i=0; i<str.length; i++){
            if (str.charAt(i)==='.'){
                this.decimalIndex=i
                break
            }
        }
        if (decimalIndex===-1){
            this.decimalIndex=str.length
            this.str+='.'
        }
        this.str=str
    }

    getDecimalPlaces() {
        this.str.length-this.str.decimalIndex
    }

    add(preciseNumber){
        if(getDecimalPlaces()<preciseNumber.getDecimalPlaces()) {
            let limit=preciseNumber.getDecimalPlaces()-getDecimalPlaces()
            for (var i=0; i<limit; i++) {
                this.str+='0'
            }
        } else if (getDecimalPlaces()>preciseNumber.getDecimalPlaces()) {
            let limit=getDecimalPlaces()-preciseNumber.getDecimalPlaces()
            for (var i=0; i<limit; i++) {
                for (var i=0; i<limit; i++) {
                    preciseNumber.str+='0'
                }
            }
        }
    }
}
export default PreciseNumber