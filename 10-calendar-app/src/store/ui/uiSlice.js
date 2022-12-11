import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
    },
    reducers: {
        onOpenDateModal: ( state ) => { 
            state.isDateModalOpen = true
        },

        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;


//Si no estuvieramos usando el redux-toolkit se deberia hacer de esta forma en cada reducer
// reducers: {
//     onOpenDateModal: ( state ) => {
//         state.isDataModalOpen = true,
//          return {
    //         ...state,
//              }
//
//     }
// } 
