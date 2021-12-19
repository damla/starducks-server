import chai, { assert } from 'chai'
import chaiHttp from 'chai-http'
import app from '../../app.js'
import seedData from '../db/coffees.js'

chai.use(chaiHttp)

describe('/GET/coffee-list', () => {
  it('it should GET all of the coffees', async () => {
    let res = await chai.request(app).get('/coffee-list')

    chai.expect(res.status).to.equal(200)
    chai.expect(res.body).to.be.a('array')
    chai.expect(res.body.length).to.equal(seedData.length)
    chai.expect(
      res.body.every((i) =>
        chai
          .expect(i)
          .to.have.all.keys(
            'title',
            'description',
            'ingredients',
            'category',
            '_id'
          )
      )
    )
  })
})
