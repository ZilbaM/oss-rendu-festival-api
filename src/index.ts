import ApiService from './service';

async function getAllFestivals() {
	const apiService = new ApiService();
	apiService.getFestivals().then((festivals) => {
		return festivals;
	});
}

module.exports = getAllFestivals;