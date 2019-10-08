import LimitBreachDetector from '../../../utilities/LimitBreachDetector'

class SmallNumber{

    value

    createIntFromString(value){
        const tempValue=parseInt(value)
        if (String(tempValue)!=value){
            throw new Error("Number would be out of bounds")
        }
        this.value=tempValue
    }

    /*
    createFloatFromString(value){
        const tempValue=parseFloat(value)
        if (String(tempValue)!=value){
            throw new Error("Number would be out of bounds")
        }
        this.value=tempValue
    }
    */

    add(value){
        LimitBreachDetector.isAdditionOutOfLimit(this.value, value)
        this.value+value
    }

    subtract(value){
        LimitBreachDetector.isSubtractionOutOfLimit(this.value, value)
        this.value+value
    }

    multiplication(value){
        LimitBreachDetector.isMultiplicationOutOfLimit(this.value, value)
        this.value+value
    }

    division(value){
        LimitBreachDetector.isDivisionOutOfLimit(this.value, value)
        this.value+value
    }

}

export default SmallNumber