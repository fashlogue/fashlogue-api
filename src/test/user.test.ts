import {expect} from 'chai';
import * as httpStatus from 'http-status';
import app from '../config/express';
import UserModel from '../api/user/user.model'
import 'mocha';
const request = require('supertest');
require('ts-mocha');

process.env.NODE_ENV = 'test';
describe('USER', ()=> {
    beforeEach(function (done) {
        UserModel.deleteMany({}, (err) => {
          done()
        })
    });

    describe('GET /api/users', ()=> {
        it('Should return all users in the DB', ()=>{
            return request(app)
            .get('/api/users')
            .expect(httpStatus.OK)
            .then((res) => {
                expect(res.body.result).to.be.an('array');
            });
        });
    })
    
    describe('POST /api/users ', ()=>{ 
        it('Should create a user in the db', ()=> {
            return request(app)
            .post('/api/users')
            .send({
                username: 'perpz',
                password: 'miracle123'
            })
            .expect(httpStatus.CREATED)
            .then((res) => {
                expect(res.body.data).to.be.an('object');
                expect(res.body.data.token).to.be.an('string');
            })
            
        });
    })
    
    describe('PUT /api/users/:username ', ()=>{
        
        it('Should update oauthId in users model', (done)=>{
            let user = new UserModel({
                username: "freeman",
                password: "miracle123"
            });
            user.save((err, user)=> {
                request(app)
                .put('/api/users/'+user.username)
                .send({
                    oauthId: 200
                })
                .expect(httpStatus.OK)
                .then((res)=> {
                    expect(res.body.message).to.be.a('string');
                    expect(res.body.result.oauthId).to.be.equal(200);
                    done()
                })
            })
        })
        
    })

})
