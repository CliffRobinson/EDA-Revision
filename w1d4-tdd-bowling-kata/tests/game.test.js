const { scoreFrame, scoreGame } = require('../game')


describe('scoregame', () => {
    it('gets example 1 correct', () => {
        const expected = 119
        const frames = [
            [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
        ]
        const actual = scoreGame(frames)

        expect(actual).toEqual(expected)
    })

    it('gets example 2 correct', () => {
        const expected = 141
        const frames = [
            [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
        ]
        const actual = scoreGame(frames)

        expect(actual).toEqual(expected)
    })

    it('scores a perfect game correctly', ()=> {
        const expected = 300
        const frames = new Array(10).fill([10,10])
        frames[9] = [10,10,10]

        const actual = scoreGame(frames)

        expect(actual).toEqual(expected)
    })

})

describe('scoreframe', ()=> {
    it('scores a simple frame correctly', ()=> {
        const expected = 7
        const actual = scoreFrame([5,2])

        expect(actual).toEqual(expected)
    })

    it('scores a strike frame correctly', ()=> {
        const expected = 18
        const actual = scoreFrame([10,0], [5,3])

        expect(actual).toEqual(expected)
    })

    it('scores a double strike frame correctly', ()=> {
        const expected = 30
        const actual = scoreFrame([10,0], [10, 0], [10,0])

        expect(actual).toEqual(expected)
    })

    it('scores a spare frame correctly', ()=> {
        const expected = 15
        const actual = scoreFrame([6,4],[5,3])

        expect(actual).toEqual(expected)
    })

    it('scores the final frame correctly', () => {
        const expected = 30 
        const actual = scoreFrame([10,10,10])

        expect(actual).toEqual(expected)
    })
})