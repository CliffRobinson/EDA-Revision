import rootReducer from './index'
import {showError} from '../actions'

test('show error', ()=> {
    const action = showError('butts')
    expect(rootReducer(undefined, action).errorMessage).toEqual("butts")
})