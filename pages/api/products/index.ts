import { Items } from "./new"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { Low, JSONFile } from "lowdb"
import type { NextApiRequest, NextApiResponse } from "next"

const getAllProducts = async (
	request: NextApiRequest,
	response: NextApiResponse<Items | any>
) => {
	const __dirname = dirname(fileURLToPath(import.meta.url))

	try {
		// Use JSON file for storage
		const file = join(__dirname, "db.json")
		const adapter = new JSONFile<Items>(file)
		const db = new Low<Items>(adapter)

		await db.read()

		db.data = db.data || { items: [] }
		// Query items
		const { items } = db.data
		response.status(200).json({ items })
	} catch (error) {
		response.status(500).json({ message: "Internal server error" })
	}
}

export default getAllProducts
