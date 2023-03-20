import { fakeDB } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"

class CatsService {
  async getCatById(catId) {
    const cat = await fakeDB.cats.find(c => c.id == catId)

    if (!cat) {
      throw new BadRequest("The ID was invalid, no cat was found")
    }

    return cat
  }
  async getCats() {
    const cats = await fakeDB.cats
    return cats
  }

}

export const catsService = new CatsService()