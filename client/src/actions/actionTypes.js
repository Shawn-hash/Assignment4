import * as api from '../api'

export const actionTypes = {
  GET_CARDS: 'cards/getCards',
  ADD_CARD: 'cards/addCard'
};

export const getCards = () => async(dispatch) => {
    try{
        const { data } = await api.fetchCards();
        //data represents the post
        dispatch({type:'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error)
        //never console log error.message instead of error! information is lost this way!
    }
}

export const createCard = (card) => async(dispatch) => {
    try{
        const { data } = await api.createCard(card);
        dispatch({ type:'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateCard = (id, card) => async(dispatch) => {
    try{
        const { data } = await api.updateCard(id, card);
        dispatch({type:'UPDATE', payload: data});
        //better to set type as constants!
    } catch(error){
        console.log(error)
    }
}

export const deleteCard = (id) => async(dispatch) => {
    try{
        const { data } = await api.deleteCard(id);

        dispatch({type:'DELETE', payload: id});
        //better to set type as constants!
    } catch(error){
        console.log(error)
    }
}