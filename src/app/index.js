const ui = require('./ui');
const Github = require('./github');

const { client_id, client_secret } = require('./config.json');

const github = new Github(client_id, client_secret);

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {
	
	const textSearch = document.getElementById('textSearch').value; //captura lo que escriba en input
 	console.log(textSearch);
	e.preventDefault();
});