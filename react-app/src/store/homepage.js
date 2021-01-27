const LOAD = "schools/LOAD"

const load = schools => ({
    type: LOAD,
    schools
})

export const getSchools = () => {
    const res = fetch("/api/")
    if (res.ok){
        const listings = await res.json()
        dispatch(load(listings));
    }
}

const initialState = {
    schools: {}
}

const schoolsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            return {...state, schools: action.schools}
        }
        default:
            return state;
    }
}


export default schoolsReducer;
