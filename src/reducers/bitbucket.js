const bitbucketReducerDefaultState = {}
export default (state = bitbucketReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_BITBUCKET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}