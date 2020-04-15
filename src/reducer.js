import {combineReducers} from 'redux'
import homeReducer from './app/pages/Home/reducer'

export default combineReducers({
    data: combineReducers({
        pages: combineReducers({
            home: homeReducer
        })
    })
})
