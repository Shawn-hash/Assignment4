import * as api from '../api'

export const actionTypes = {
  GET_CARDS: 'cards/getCards',
  ADD_CARD: 'cards/addCard'
};

export const getPosts = () => async(dispatch) => {
    try{
        const { data } = await api.fetchPosts();
        //data represents the post
        dispatch({type:'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error)
        //never console log error.message instead of error! information is lost this way!
    }
}
