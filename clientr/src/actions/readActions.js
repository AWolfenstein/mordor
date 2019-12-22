export const  FANFIC_LOADED_TO_READ='FANFIC_LOADED_TO_READ';
export const  COMMENT_LOADED='COMMENT_LOADED';
export const  COMMENT_NEW='COMMENT_NEW';
function fanficToReadLoaded(data){
	return {
		type: 'FANFIC_LOADED_TO_READ',
        payload: data
	}
}
function addComment(data){
	return {
		type: 'COMMENT_NEW',
        payload: data
	}
}
function commentLoaded(data){
	return {
		type: 'COMMENT_LOADED',
        payload: data
	}
}

export function loadComments(id){
	return dispatch => {

		return fetch(`http://localhost:3002/read/${id}/loadcomments`)
		.then( (response) => response.json() )
		.then( (data) => dispatch(commentLoaded(data.data)))
		.catch( (e) => console.log(e) );
	}	
}

export function submitComment(ItemID,data){
	var token = localStorage.getItem('token') || null;
	return dispatch => {
		return fetch(`http://localhost:3002/read/${ItemID}/newcomment`, { 
			method: 'POST', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			body: JSON.stringify(data), 
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }else{

		        	dispatch(addComment(data.email, data.body))
		        }
		    })
			.catch( (e) => console.log(e) );
	}	
}

export function loadFanficToRead(data){
    console.log(data)
	return dispatch => {
		return fetch(`http://localhost:3002/read/${data.id}`, { 
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
			.then( ({data}) => {
				dispatch(fanficToReadLoaded(data));
			})		
			.catch( (e) => console.log(e) );
	}	
}