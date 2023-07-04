export default class ApiService {
	url: string;
  
	constructor() {
		this.url = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals';
	}
  
	async getFestivals(params: Record<string, any> = {}): Promise<any> {
		const query = new URLSearchParams(params).toString();
		const requestUrl = query ? `${this.url}&${query}` : this.url;
  
		const response = await fetch(requestUrl);
		return await response.json();
	}
}
  