export const USER_REGISTERED= 'USER_REGISTERED';
export const USER_LOGGEDIN ='USER_LOGGEDIN';
export const USER_LOGOUT = 'USER_LOGOUT';


function userLoggedIn(email,fname,lname){
	return {
		type: 'USER_REGISTERED',
		email: email,
		fname: fname,
		lname: lname
	}
}

function userRegistered(email,fname,lname){
	return {
		type: 'USER_LOGGEDIN',
		email: email,
		fname: fname,
		lname: lname
	}
}

function logout(){
	return {
		type: 'USER_LOGOUT'
	}
}

export function submitLogin(data){
	return dispatch => {
		return fetch(`http://localhost:3002/user/${data.email}`, { 
				method: 'POST', 
 				headers: {
    				'Accept': 'application/json',
    				'Content-Type': 'application/json'
  				},
				body: JSON.stringify(data), 
				mode: 'cors'})
			.then( (response) => {
		        if (!response.ok) {
					console.log("error")
				throw Error(response.statusText);
				}
			
        		return response.json();
			})
			.then( (data) => {
		
				localStorage.setItem('email', data.data.email);
				localStorage.setItem('banstatus', data.data.banstatus);
				localStorage.setItem('admin', data.data.admin);
				localStorage.setItem('fname', data.data.fname);
				localStorage.setItem('lname', data.data.lname);
				localStorage.setItem('token', data.data.tokenID);
             
			dispatch(userLoggedIn(data.data.email,data.data.fname,data.data.lname));
		

			})
			.catch( (e) => console.log(e) );
	}	
}

export function submitRegister(data){
	return dispatch => {
		return fetch('http://localhost:3002/user/', { 
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

				localStorage.setItem('email', data.data.email);
				localStorage.setItem('fname', data.data.fname);
				localStorage.setItem('banstatus', data.data.banstatus);
				localStorage.setItem('admin', data.data.admin);
				localStorage.setItem('lname', data.data.lname);
				localStorage.setItem('token', data.data.tokenID);

				dispatch(userLoggedIn(data.data.email,data.data.fname,data.data.lname));
			})		
			.catch( (e) => console.log(e) );
	}	
}

export function logoutUser() {
	return dispatch => {
		localStorage.removeItem('email');
		localStorage.removeItem('token');
		localStorage.removeItem('fname');
		localStorage.removeItem('lname');
		localStorage.removeItem('admin');
		localStorage.removeItem('banstatus');
		dispatch(logout());
	}
}