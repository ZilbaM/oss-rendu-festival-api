import ApiService from './service';

export default function getAllFestivals() {
	const apiService = new ApiService();
	apiService.getFestivals().then((festivals) => {
		return festivals;
	});
}