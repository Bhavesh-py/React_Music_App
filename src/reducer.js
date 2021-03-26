export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item:null,
    token: null,
    discover_weekly : null,
    // BQA6mqysMC_eD4K36YJKgu3UKYMbx_IMknz6-ACQUTULDj1NL7ylvdeB2ykWHl-V8_TK_rLbrZVkIR3C4jvgcREAkr9vWCZg6YrGjTFSuUgjVbMeG90mhFr4rSOMOppVPjJGQaFS8dK-0xFJpMTNaiSY9pqBEc41RqrIDSfkyftfRR_E
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }

        case "SET_ITEM":
            return {
                ...state,
                playing: action.item,
            }

        case "SET_SPOTIFY":
            return {
            ...state,
            spotify: action.spotify,
            }
        

        default: 
        return state;
    }
}

export default reducer;