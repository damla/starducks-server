import chai, { assert } from 'chai'
import chaiHttp from 'chai-http'
import app from '../../app.js'

// let should = chai.should()
chai.use(chaiHttp)

describe('/GET/coffee', () => {
  it('this is a mock test', async () => {
    let res = await chai.request(app).get(`/coffee`)
    chai.expect(res.status).to.equal(200)
  })
})
