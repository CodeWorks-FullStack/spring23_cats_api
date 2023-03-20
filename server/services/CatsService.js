import { Cat, fakeDB } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"

class CatsService {
  async deleteCat(catId) {
    const catIndex = await fakeDB.cats.findIndex(c => c.id == catId)

    if (catIndex == -1) {
      throw new BadRequest("NO CAT FOUND")
    }

    fakeDB.cats.splice(catIndex, 1)
  }
  async createCat(catData) {

    if (!catData.name || !catData.id || !catData.color) {
      throw new BadRequest("No cat data found")
    }

    const builtCat = new Cat(catData)
    await fakeDB.cats.push(builtCat)
    return builtCat
  }
  async getCatById(catId) {
    const cat = await fakeDB.cats.find(c => c.id == catId)

    if (!cat) {
      throw new BadRequest("The ID was invalid, no cat was found")
    }

    return cat
  }
  async getCats(query) {
    let cats = []

    if (query.color) {
      cats = await fakeDB.cats.filter(c => c.color.toLowerCase() == query.color.toLowerCase())
    }
    else {
      cats = await fakeDB.cats
    }

    return cats
  }

}

export const catsService = new CatsService()