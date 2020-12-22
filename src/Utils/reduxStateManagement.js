
export const loadState = () => {
    try {
        const searializedState = localStorage.getItem('state');
        if(searializedState == null) {
            return undefined;
        }
        return JSON.parse(searializedState);
    } catch(err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const searializedState = JSON.stringify(state);
        localStorage.setItem('state',searializedState);
    } catch (err) {
        console.log("Error while saving state to local storage");
    }
}