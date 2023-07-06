const ApiService = require('./service');

async function getAllFestivals() {
	const apiService = new ApiService();
	apiService.getFestivals().then((festivals: any) => {
		return festivals;
	});
}

module.exports = getAllFestivals;