import { Items } from "./new"
import { fileURLToPath } from "url"
import { join, dirname } from "path"
import { Low, JSONFile } from "lowdb"

const getAllProducts = async () => {
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
		return items
	} catch (error) {
		console.log(error)
	}
}

export default getAllProducts
