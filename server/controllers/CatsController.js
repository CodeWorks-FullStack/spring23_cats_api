import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

export class CatsController extends BaseController {
  constructor () {
    super('api/cats')
    this.router
      .get('', this.getCats)
      .get('/:catId', this.getCatById)
  }

  // NOTE req is the request a user sends to the api

  // NOTE res is the response that the api sends back

  // NOTE next is what we send if an error occurs

  async getCats(req, res, next) {
    try {
      const cats = await catsService.getCats()
      return res.send(cats)
    } catch (error) {
      next(error)
    }
  }

  async getCatById(req, res, next) {
    try {
      const catId = req.params.catId
      const cat = await catsService.getCatById(catId)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }
}