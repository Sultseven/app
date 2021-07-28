class Header {
	render(){
		const htmlHeader = ` 
			<div class="header-container"></div>
		 `;

		 ROOT_HEADER.innerHTML = htmlHeader;
	}
}

const headerPage = new Header();
headerPage.render();
console.log('header')