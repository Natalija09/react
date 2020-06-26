const initialState = {
    name: "",
    prezime: "",
    godinanaragjanje: "",
    imenamilenik: "",
    rasa: ""
}

const SayHelloReducer = (state=initialState, action) =>{
    switch(action.type){
        case "SAY_HELLO":
            return{
                ...state,
                name:action.payload
            }

            case "SAY_PREZIME":
            return{
                ...state,
                prezime :action.payload
            }
            case "SAY_BIRTHYEAR":
            return{
                ...state,
                godinanaragjanje :action.payload
            }
            case "SAY_IME":
            return{
                ...state,
                imenamilenik :action.payload
            }
            case "SAY_VID":
            return{
                ...state,
                rasa :action.payload
            }

            default: return state;

    }
    
           

}



export default SayHelloReducer
