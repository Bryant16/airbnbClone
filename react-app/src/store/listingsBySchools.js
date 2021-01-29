const LOAD = "PropsBySchools/LOAD"

const load = listings => ({
    type: LOAD,
    listings
})

export const getPropertiesNearSchools = (id) => async dispatch =>{
    console.log("fetch about to fire", id)
    const res = await fetch(`/api/schools/${id}`)
    if (res.ok){
        const objWithProperties = await res.json()
        console.log("if res is okay:", objWithProperties)
        dispatch(load(objWithProperties));
    }else {
        console.log("error, not ok")
    }
}



const propertiesNearSchoolsReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return [...action.listings]
        }
        default:
            return state;
    }
}


export default propertiesNearSchoolsReducer;
