import { nanoid } from "nanoid"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { Low, JSONFile } from "lowdb"
import type { NextApiRequest, NextApiResponse } from "next"

export type Product = {
	id: string
	name: string
	category: string
	description: string
	apps: { website: string; android: string; ios: string }
	socials: {
		facebook: string
		twitter: string
	}
}

export type Items = {
	items: Product[]
}

const submitProduct = async (
	request: NextApiRequest,
	response: NextApiResponse<Product>
) => {
	const __dirname = dirname(fileURLToPath(import.meta.url))

	// Use JSON file for storage
	const file = join(__dirname, "db.json")
	const adapter = new JSONFile<Items>(file)
	const db = new Low<Items>(adapter)
	await db.read()

	db.data = db.data || { items: [] }
	// Create and query items
	const item = { ...request.body, id: nanoid(10) }
	// const { items } = db.data
	db?.data?.items.push(item)
	await db.write()
	response.status(200).json(item)
}

export default submitProduct
