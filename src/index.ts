import ApiService from './service';

export default async function getAllFestivals() {
	const apiService = new ApiService();
	apiService.getFestivals().then((festivals) => {
		return festivals;
	});
}