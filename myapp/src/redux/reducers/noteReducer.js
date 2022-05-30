import {createSlice} from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'note_state',
    initialState: 'Fixed State',
    reducers: {
        changeState: (state, action) => {
            switch(action.type) {
                case 'Fixed State':
                    return 'Fixed State';
                case 'Input State':
                    return 'Input State';
                case 'Button State':
                    return 'Button State';
                default:
                    return 'Fixed State';
            }
        }
    }
})

export const {changeState} = noteSlice.actions;
export default noteSlice.reducer;