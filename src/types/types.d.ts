export interface Product {
	id: number
	title: string
	description: string
	price: number
	rating: any
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

export type Review = {
	id: number;
	user: string;
	content: string;
	rating: number;
	date: string;
  };


