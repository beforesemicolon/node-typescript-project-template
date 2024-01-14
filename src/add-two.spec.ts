import { addTwo } from './add-two'

describe('addTow', () => {
    it('should add two numbers', () => {
        expect(addTwo(1, 2)).toBe(3)
    })
})
