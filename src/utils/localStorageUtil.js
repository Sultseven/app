class LocalStorageUtil {
	constructor(){
		this.keyName = 'products'
	}

	getProducts(){
		const productsLocalStorage = LocalStorage.getItem(this.keyName);
		if(productsLocalStorage !== null){
			return JSON.parse(productsLocalStorage);
		}
		return [];

	}

	putProducts(id){

	}
}