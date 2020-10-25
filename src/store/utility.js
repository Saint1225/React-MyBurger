export const updateObject = (state, updatedProperities) => {
    return {
        ...state,
        ...updatedProperities
    }
}