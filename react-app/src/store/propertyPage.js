const LOAD = "propertyPage/LOAD"

const load = property => ({
    type: LOAD,
    property,
});

export const getPage = (id) => async dispatch => {
    const res = await fetch(`api/property/${id}`)
    console.log(res)
    if (res.ok) {
        const property = await res.json()
        console.log(property)
        dispatch(load(property));
    }
};

const initialState = {
    property: {}
}

const propertyPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            return {...state, property: action.property}
        }
        default:
        return state
    }
};

export default propertyPageReducer;
