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

export const updateCard = (name, card) => async(dispatch) => {
    try{
        const { data } = await api.updateCard(card.name, card);
        dispatch({type:'UPDATE', payload: data});
    } catch(error){
        console.log(error)
    }
}

export const deleteCard = (name) => async(dispatch) => {
    try{
        const { data } = await api.deleteCard(name);

        dispatch({type:'DELETE', payload: name});
        //better to set type as constants!
    } catch(error){
        console.log(error)
    }
}