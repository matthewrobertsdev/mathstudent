import FractionTeacher from '../model/mathteachers/FractionTeacher'

test('latex for a fraction',()=>{
  expect(FractionTeacher.fractionLatex(7,8).replace(/\s+/g, ' ')
    ).toBe(
      `\\frac{7}{8}`.replace(/\s=/g, ' ')
  )
})

test('fraction description',()=>{
  expect(FractionTeacher.teaching.fractionDescription(7,8).replace(/\s+/g, ' ')
    ).toBe(
      `begin fraction 7 over 8 end fraction`.replace(/\s+/g, ' ')
  )
})

test('provides description of adding two fractions problem',()=>{
  expect(FractionTeacher.addAFractionProblem(
    '@firstNumerator@2@firstDenominator@4@secondNumerator@5@secondDenominator@3'
    ).replace(/\s+/g, ' ')
    ).toBe(
    `{$bl}${FractionTeacher.fractionLatex(2,4)}+${FractionTeacher.fractionLatex(5,3)}{$bl}${FractionTeacher.teaching.fractionDescription(2, 4)}     \
    plus ${FractionTeacher.teaching.fractionDescription(5, 3)}`.replace(/\s+/g, ' ')
  )
})