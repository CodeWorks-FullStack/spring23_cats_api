import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

export class CatsController extends BaseController {
  constructor () {
    super('api/cats')
    this.router
      .get('', this.getCats)
      // NOTE a colon in our mount path denotes a variable that can be targeted in the request parameters (req.params)
      .get('/:catId', this.getCatById)
      .post('', this.createCat)
      .delete('/:catId', this.deleteCat)
  }

  // NOTE req is the request a user sends to the api

  // NOTE res is the response that the api sends back

  // NOTE next is what we send if an error occurs

  async getCats(req, res, next) {
    try {
      const query = req.query
      const cats = await catsService.getCats(query)
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

  async createCat(req, res, next) {
    try {
      // NOTE                 VVVVVVVVVV this is our request body
      // api.post('api/cars', {make: 'mazda'})
      // NOTE 99% of the time, post reequests have a body
      const catData = req.body
      const cat = await catsService.createCat(catData)
      return res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async deleteCat(req, res, next) {
    try {
      // NOTE delete requests do not have a request body
      const catId = req.params.catId
      await catsService.deleteCat(catId)
      return res.send('Deleted cat')
    } catch (error) {
      next(error)
    }
  }

}