export interface Product {
	id: number
	title: string
	description: string
	price: number
	stock: number
	brand: string
	category: string[]
	thumbnail: string
	images: string[]
	quantity: number
}

export interface CustomerData {
	fullName: string;
	address: string;
	phone: string;
	email: string;
}

export interface RecipientData {
	fullName: string;
	address: string;
	phone: string;
	province: string;
	notes: string;
}


