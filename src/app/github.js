class Github{

	constructor(clientId, clientSecret){
		this.client_id = clientId;
		this.client_secret = clientSecret
	}

	fetchUser(user){
	   fetch(`http://api.github.com/users/?client_id=${this.client_id}&client_secret=${this.client_secret}`)
	}
}