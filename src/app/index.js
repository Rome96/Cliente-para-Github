const UI = require('./ui');
const Github = require('./github');
const { client_id, client_secret } = require('./config.json');
const github = new Github(client_id, client_secret);
const ui = new UI();
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {
	
	const textSearch = document.getElementById('textSearch').value; //captura lo que escriba en input
 	
	if(textSearch !== ''){
		github.fetchUser(textSearch)
			.then(data => {
				if(data.userData.message === 'Not Found') {
					ui.showMessage('User Not Found', 'alert alert-danger mt-4 col-md-12');
				}
				else {
					ui.profileShow(data.userData);
					ui.repositoriesShow(data.repositories);
				}
			  
			})
	}

	e.preventDefault();
});