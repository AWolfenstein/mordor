export const  USER_FANFIC_LOADED='USER_FANFIC_LOADED';
export const  USER_FANFIC_DELETED='USER_FANFIC_DELETED';
function userFanficLoaded(data){
	return {
		type: 'USER_FANFIC_LOADED',
        payload: data
	}
}

export function loadUserFanfic(email){
	return dispatch => {

		return fetch(`http://localhost:3002/myfanfics/${email}`)
		.then( (response) => response.json() )
		.then( (data) => dispatch(userFanficLoaded(data.data)))
		.catch( (e) => console.log(e) );
	}	
}

function fanficDeleted(data){
	return {
		type: 'USER_FANFIC_DELETED',
		payload: data
	}
}

export function deleteFanfic(data){
	return dispatch => {
		return fetch(`http://localhost:3002/myfanfics/removefanfic`, { 
			method: 'POST', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
			body: JSON.stringify(data), 
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }
        		return response.json();
			})
			.then( (data) => {
				dispatch(fanficDeleted(data.data));
			})		
			.catch( (e) => console.log(e) );
	}	
}