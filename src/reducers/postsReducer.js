export default (state=[], action) => {
    switch (action.type ) {
        case "Fetch_Post" :
            return action.payload;
        default:
            return state;
        
    };

    
    
};