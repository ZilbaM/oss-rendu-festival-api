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
	return apiService.getFestivals().then((response) => response.records);
}

export function getFestivalsByDepartmentCode(departmentCode: number) : Promise<any> {
	let qpDepartmentCode : string;
	if (departmentCode < 1 || ((departmentCode > 95 && departmentCode < 971) || departmentCode > 976)) {
		throw new Error('Invalid department code');
	} else if (departmentCode < 10) {
		qpDepartmentCode = `0${departmentCode}`;
	} else {
		qpDepartmentCode = departmentCode.toString();
	}

	const apiService = new ApiService();
	return apiService.getFestivals({ 'refine.departement': qpDepartmentCode }).then((response) => response.records);
}