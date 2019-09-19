import ListUtility from './ListUtility'
test('[1,2,4,8],[1,3,8,10] returns [1,8]', () => {
    expect(JSON.stringify(ListUtility.elementsInCommon([1,2,4,8],[1,3,8,10]))).toBe(JSON.stringify([1,8]));
  });

  test('[1,2,4,8],[1,3,8,10] and [1,2,4,8] unchanged', () => {
    var array1=[1,2,4,8];
    var array2=[1,3,8,10];
    ListUtility.elementsInCommon(array1,array2)
    expect(array1).toBe(array1);
  });

  test('[1,2,4,8],[1,3,8,10] and [1,3,8,10] unchanged', () => {
    var array1=[1,2,4,8];
    var array2=[1,3,8,10];
    ListUtility.elementsInCommon(array1,array2)
    expect(array2).toBe(array2);
  });