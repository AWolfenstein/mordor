export const  USER_FANFIC_LOADED='USER_FANFIC_LOADED';

function userFanficLoaded(data){
	return {
		type: 'USER_FANFIC_LOADED',
        payload: data
	}
}

export function loadComments(email){
	return dispatch => {

		return fetch(`http://localhost:3002/myfanfics/${email}`)
		.then( (response) => response.json() )
		.then( (data) => dispatch(commentLoaded(data.data)))
		.catch( (e) => console.log(e) );
	}	
}