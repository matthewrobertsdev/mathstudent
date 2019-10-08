class LimitBreachDetector{

    static isAdditionOutOfLimit(a, b) {
        var c = a + b;
        if (!(a !== c-b || b !== c-a)){
          throw 'Addition out of bounds'
        }
      }

     static isMultiplicationOutOfLimit(a, b) {
        var c = a * b;
        if(!(a !== c/b || b !== c/a)){
          throw 'Multiplication out of bounds'
        }
      }

      static isSubtractionOutOfLimit(a, b) {
        var c = a - b;
        if(!(a !== c+b || b !== c+a)){
          throw 'Subtraction out of bounds'
        }
      }

     static isDivisionOutOfLimit(a, b) {
        var c = a / b;
        if (!(a !== c*b || 1/b !== a*c)){
          throw 'Division out of bounds'
        }
      }
      

}

export default LimitBreachDetector