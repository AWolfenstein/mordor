export const USER_UPDATEINFO = 'USER_UPDATEINFO';

function userUpdateInfo(email){
	return {
		type: 'USER_UPDATEINFO',
		email: email
		
	}
}

export function submitUpdateInfo(data){
	return dispatch => {
		return fetch(`http://localhost:3002/user/${data.email}/updateuserinfo`, { 
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
				localStorage.setItem('token', data.data.tokenID);

				dispatch(userUpdateInfo(data.data.email));
			})		
			.catch( (e) => console.log(e) );
	}	
}