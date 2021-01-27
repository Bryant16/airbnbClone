const LOAD = "properties/LOAD"

const load = properites => ({
    type: LOAD,
    properites
})

export const getProduct = () => {
    const res = fetch("/api/")
    if (res.ok){
        const listings = await res.json()
        dispatch(load(listings));
    }
}

const initialState = {
    properites: {}
}

const properitesReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            return {...state, property: action.property}
        }
        default:
            return state;
    }
}


export default properitesReducer;
