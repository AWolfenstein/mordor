export const FANFIC_CREATED= 'FANFIC_CREATED';
export const  FANFIC_CA_TAG_LOADED='FANFIC_CA_TAG_LOADED';
export const FANFIC_LOADED_TO_EDIT= 'FANFIC_LOADED_TO_EDIT';
export const FANFIC_EDITED= 'FANFIC_EDITED';
function fanficCreated(email){
	return {
		type: 'FANFIC_CREATED',
		email: email
      
	}
}
function fanficLoadedToEdit(data){
	return {
		type: 'FANFIC_LOADED_TO_EDIT',
		payload: data
      
	}
}
function fanficEdited(data){
	return {
		type: 'FANFIC_EDITED',
		payload: data
      
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

export function loadToEditFanfic(id){
	return dispatch => {

		return fetch(`http://localhost:3002/addfanfic/${id}/loadtoedit`)
		.then( (response) => response.json() )
		.then( (data) => dispatch(fanficLoadedToEdit(data.data)))
		.catch( (e) => console.log(e) );
	}	
}
export function editedFanfic(id,data){
	return dispatch => {
		return fetch(`http://localhost:3002/addfanfic/${id}/updatefanfic`, { 
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
				dispatch(fanficEdited(data.data));
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