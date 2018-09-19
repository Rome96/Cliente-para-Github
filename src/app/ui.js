class UI {
	constructor(){
		this.profile = document.getElementById('profile');
		this.repos = document.getElementById('repos');
	}

	profileShow(user){
		console.log(user);
		this.profile.innerHTML = `
			<div class="card mt-2 animated bounceInLeft">
					<img src="${user.avatar_url}" class="card-img-top">
				<div class="card-body">
						<h4 class="card-title">${user.name} / ${user.login}</h4>
					<a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">
					  Ver Perfil 
					</a> <br>
					<span class="badge">Followers: ${user.followers}</span><hr>
					<span class="badge">Following: ${user.following}</span><hr>
					<span class="badge">Company: ${user.company}</span>
				</div>
			</div>
		`;
		this.messageClear();
	}

	showMessage(message, classCss){
		const div = document.createElement('div');
		div.className = classCss;
		div.appendChild(document.createTextNode(message));
		const content = document.querySelector('.row');
		const profile = document.querySelector('#profile');
		content.insertBefore(div, profile);
	}

	messageClear(){
		const alertFound = document.querySelector('.alert');
		if (alertFound) {
			alertFound.remove();
		}
	}

	repositoriesShow(repositories){
	  let firstTenRepos = repositories.slice(0, 10)
	  let template = '';
	  firstTenRepos.map(repo => {
	  	template += `
	  		<div class="card card-body mt-2 animated bounceInUp">
				<div class="row">
					<div class="col-md-6">
						<a href="${repo.html_url}" target="_blank">${repo.name}</a>
					</div>
					<div class="col-md-6">
						
					</div>
				</div>
			</div>
	  	`
	  })
	  this.repos.innerHTML = template;
	}
}
module.exports = UI