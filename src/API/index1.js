class Helper {
	static baseURL () {
		return "https://api.foursquare.com/v2"
	}

	static auth() {
		const keys = {
			client_id : "WVFAAZS5244P3GU3YZMLVQISWZ1H1151OBTSGPS0K5NT5BOK",
			client_secret : "4PPZFDBKXFMY5XOMJPWYSJZB51KFOZECRTLKYNXOROO0HEFM",
			v : "20180929"
		}
		return Object.keys(keys).map(key => `${key}=${keys[key]}`).join("&")
	}

	static urlBuilder(urlPrams) {
		if(!urlPrams) {
			return "";
		}
		let ad1 = Object.keys(urlPrams)
		let ad2 = ad1.map(key => `${key}=${urlPrams[key]}`).join("&")
		console.log(ad1)
		console.log(ad2)
		return ad2
	}

	static headers() {
		return {
			Accept: "application/json"
		}
	}

	static simpleFetch(endPoint, method, urlPrams) {
		let requestData = {
			method,
			headers : Helper.headers
		}
		return fetch(
			`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}}`, requestData
		).then(res => res.json());
	}
}

export default class SquareAPI {
	static search(urlPrams) {
		return Helper.simpleFetch("/venues/search", "GET", urlPrams);
	}

	static getVenueDetails(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET")
	}

	static getVenuePhotos(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET")
	}
}