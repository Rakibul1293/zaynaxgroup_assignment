import allData from '../../dataStorage/data.json';

const initState = {
    allData
}

const contactReducer = (state = initState.allData, action) => {
    return state;
    
//    switch (action.type) {
//        case 'UPDATE_DATA': {
//            let updatedData = state.filter(item => item.brand === action.payload);
//            console.log(action.payload);
//            console.log(updatedData);
//            
//            return updatedData;
//        }
//
//        default return state;: 
//    }
}

export default contactReducer;