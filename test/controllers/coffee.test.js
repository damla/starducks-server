import chai, { assert } from 'chai'
import chaiHttp from 'chai-http'
import app from '../../app.js'
import JSONdb from 'simple-json-db'
const db = new JSONdb('./utils/db/db.json')

// let should = chai.should()
chai.use(chaiHttp)

describe('/GET/coffee-list', () => {
  it('it should GET all of the coffees', async () => {
    let res = await chai.request(app).get('/coffee-list')

    chai.expect(res.status).to.equal(200)
    chai.expect(res.body).to.be.a('array')
    chai.expect(res.body.length).to.equal(db.get('coffees').length)
    chai.expect(
      res.body.every((i) =>
        chai
          .expect(i)
          .to.have.all.keys(
            'title',
            'description',
            'ingredients',
            'category',
            'id'
          )
      )
    )
    assert.deepEqual(res.body, db.get('coffees'), 'Coffee list is correct.')
  })
})
