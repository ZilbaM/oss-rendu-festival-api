class ApiService {
	url: string;
  
	constructor() {
		this.url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals';
	}
  
	async getFestivals(params: Record<string, any> = {}): Promise<any> {
		const query = new URLSearchParams(params).toString();
		const requestUrl = query ? `${this.url}&${query}` : this.url;
  
		const response = fetch(requestUrl).then((response) => response.json());
		return response;
	}
}

export function getAllFestivals() {
	const apiService = new ApiService();
	return apiService.getFestivals();
}