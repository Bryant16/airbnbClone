const LOAD = "HomePage/LOAD"

const load = schools => ({
    type: LOAD,
    schools: schools
})

export const getSchools = () => async dispatch =>{
    const res = await fetch("/api/schools")
    if (res.ok){
        const objWithSchoolsKey = await res.json()
        dispatch(load(objWithSchoolsKey.schools));
    }else {
    }
}



const schoolsReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.schools
        }
        default:
            return state;
    }
}


export default schoolsReducer;
