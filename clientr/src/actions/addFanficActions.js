export const FANFIC_CREATED= 'FANFIC_CREATED';
export const  FANFIC_CA_TAG_LOADED='FANFIC_CA_TAG_LOADED';
function fanficCreated(email){
	return {
		type: 'FANFIC_CREATED',
		email: email
      
	}
}
function tagsLoaded(categories,tags){
	return {
		type: 'FANFIC_CA_TAG_LOADED',
		categories: categories,
		tags:tags
	}
}

export function createFanfic(data){
	return dispatch => {
		return fetch(`http://localhost:3002/addfanfic/${data.email}/addnewfanfic`, { 
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
				dispatch(fanficCreated(data.data.email));
			})		
			.catch( (e) => console.log(e) );
	}	
}

export function loadTags(){
	return dispatch => {
		return fetch(`http://localhost:3002/addfanfic/`, { 
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
			.then( (data) => {
				console.log(data)
				dispatch(tagsLoaded(data.data.category,data.data.tags));
			})		
			.catch( (e) => console.log(e) );
	}	
}