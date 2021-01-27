const LOAD = "HomePage/LOAD"

const load = schools => ({
    type: LOAD, //{schools:{schools:[]}} => {type: LOAD, schools:[]}
    schools: schools
})

export const getSchools = () => async dispatch =>{
    console.log("GETSCHOOLS IS BEING CALLED")
    const res = await fetch("/api/schools")
    console.log("res:", res)
    if (res.ok){
        const objWithSchoolsKey = await res.json()
        dispatch(load(objWithSchoolsKey.schools));
    }else {
        console.log("failed res")
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
