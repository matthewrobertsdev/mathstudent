import SmallNumber from './SmallNumber'

test('9007199254740992000000 throws error', () => {
    const num=new SmallNumber()
    expect(function(){num.createIntFromString(9007199254740992000000)}).toThrow(new Error("Number would be out of bounds"));
  });

  /*
  test('9007199254740992000000 throws error', () => {
    const num=new Number()
    expect(function(){num.createFloatFromString(9007199254740992000000.9007199254740992000000)}).toThrow(new Error("Number would be out of bounds"));
  });
  */