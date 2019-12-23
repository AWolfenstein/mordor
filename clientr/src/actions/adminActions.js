export const  ADMIN_ALL_USERS_LOADED='ADMIN_ALL_USERS_LOADED';
export const  ADMIN_USER_REMOVED='ADMIN_USER_REMOVED';
export const  ADMIN_USER_BANNED='ADMIN_USER_BANNED';
export const  ADMIN_USER_UNBANNED='ADMIN_USER_UNBANNED';
export const  ADMIN_USER_ADMINNED='ADMIN_USER_ADMINNED';
export const  ADMIN_USER_UNADMINNED='ADMIN_USER_ADMINNED';

function allUsersLoaded(data){
	return {
		type: 'ADMIN_ALL_USERS_LOADED',
        payload: data
	}
}
function userRemoved(data){
	return {
		type: 'ADMIN_USER_REMOVED',
        payload: data
	}
}
function userBanned(data){
	return {
		type: 'ADMIN_USER_BANNED',
        payload: data
	}
}
function userUnBanned(data){
	return {
		type: 'ADMIN_USER_UNBANNED',
        payload: data
	}
}
function userAdminned(data){
	return {
		type: 'ADMIN_USER_ADMINNED',
        payload: data
	}
}
function userUnAdminned(data){
	return {
		type: 'ADMIN_USER_ADMINNED',
        payload: data
	}
}

export function loadAllUsers(){
	var token = localStorage.getItem('token') || null;
	return dispatch => {
		return fetch(`http://localhost:3002/admin/loadusers`, { 
			method: 'GET', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }
                return response.json();
		        	
		       
		    }).then( ({data}) => {
                dispatch(allUsersLoaded(data))
            		})	
			.catch( (e) => console.log(e) );
	}	
}


export function removeUser(id){
	var token = localStorage.getItem('token') || null;
	return dispatch => {
		return fetch(`http://localhost:3002/admin/${id}/removeuser`, { 
			method: 'GET', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }   return response.json();
		        	
		       
		    }).then( ({data}) => {
                dispatch(allUsersLoaded(data))
            		})	
			.catch( (e) => console.log(e) );
	}	
}


export function banUser(id){
	var token = localStorage.getItem('token') || null;
	return dispatch => {
		return fetch(`http://localhost:3002/admin/${id}/banuser`, { 
			method: 'GET', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }   return response.json();
		        	
		       
		    }).then( ({data}) => {
                dispatch(allUsersLoaded(data))
            		})	
			.catch( (e) => console.log(e) );
	}	
}


export function unBanUser(id){
	var token = localStorage.getItem('token') || null;
	return dispatch => {
		return fetch(`http://localhost:3002/admin/${id}/unbanuser`, { 
			method: 'GET', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }   return response.json();
		        	
		       
		    }).then( ({data}) => {
                dispatch(allUsersLoaded(data))
            		})	
			.catch( (e) => console.log(e) );
	}	
}

export function adminUser(id){
	var token = localStorage.getItem('token') || null;
	return dispatch => {
		return fetch(`http://localhost:3002/admin/${id}/adminuser`, { 
			method: 'GET', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }   return response.json();
		        	
		       
		    }).then( ({data}) => {
                dispatch(allUsersLoaded(data))
            		})	
			.catch( (e) => console.log(e) );
	}	
}

export function unAdminUser(id){
	var token = localStorage.getItem('token') || null;
	return dispatch => {
		return fetch(`http://localhost:3002/admin/${id}/unadminuser`, { 
			method: 'GET', 
 			headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    			'Authorization' : `Bearer ${token}`
  			},
			mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
		            throw Error(response.statusText);
		        }   return response.json();
		        	
		       
		    }).then( ({data}) => {
                dispatch(allUsersLoaded(data))
            		})	
			.catch( (e) => console.log(e) );
	}	
}


