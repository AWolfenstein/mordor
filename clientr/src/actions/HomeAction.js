export const  FANFICS_LOADED='FANFICS_LOADED';

function fanficsLoaded(data){
	return {
		type: 'FANFICS_LOADED',
        payload: data
	}
}

export function loadFanfics(){
	return dispatch => {
		return fetch(`http://localhost:3002/home/`, { 
			method: 'GET', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
  			},
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }
        		return response.json();
			})
			.then( ({data}) => {
				console.log(data)
				dispatch(fanficsLoaded(data));
			})		
			.catch( (e) => console.log(e) );
	}	
}