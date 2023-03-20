// NOTE this will change tomorrow

export class Cat {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.color = data.color
    this.hasTail = data.hasTail != null ? data.hasTail : true
    this.lovesJeremy = true
  }
}

class FakeDB {
  cats = [
    new Cat({
      id: 1,
      name: 'Gopher',
      color: 'Black',
      hasTail: true
    }),
    new Cat({
      id: 2,
      name: 'Frankie',
      color: 'Black',
      hasTail: true
    }),
    new Cat({
      id: 3,
      name: 'Ronald',
      color: 'Black',
      hasTail: true
    }),
    new Cat({
      id: 4,
      name: 'Kitten',
      color: 'Brown and Black',
      hasTail: true
    }),
    new Cat({
      id: 5,
      name: 'Achilles',
      color: 'Orange',
      hasTail: true
    }),
  ]
}

export const fakeDB = new FakeDB()