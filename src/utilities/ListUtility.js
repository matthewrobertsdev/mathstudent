class ListUtility {
  static union(array1, array2) {
    return (array1.concat(array2.filter(value=>!array1.includes(value)))).sort()
  }
  static intersection(array1, array2) {
    //return array1.filter(value => array2.includes(value))
    
    if (array1.length < array2.length) {
      return this.elementsInCommonOrderCounts(array1, array2);
    } else {
      return this.elementsInCommonOrderCounts(array2, array1);
    }
  }

  
  static elementsInCommonOrderCounts(array1, array2) {
    var a1 = array1.slice(); var a2 = array2.slice();
    var elementsInCommon = [];
    for (var i = 0; i < a1.length; i++) {
      var notDone = true;
      var c = 0;
      while (notDone && c < a2.length) {
        if (a1[i] === a2[c]) {
          elementsInCommon.push(a2[c]);
          a2.splice(c, 1);
          notDone = false;
        }
        c++
      }
    }
    return elementsInCommon;
  }
  
}
export default ListUtility