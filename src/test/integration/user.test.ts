import {expect} from 'chai';
import * as httpStatus from 'http-status';
import app from '../../config/express';
import UserModel from '../../api/user/user.model'
import 'mocha';
const request = require('supertest');
require('ts-mocha');


describe('USER', ()=> {
    beforeEach(function (done) {
        UserModel.deleteMany({}, (err) => {
          done()
        })
    });

    describe('GET /api/v1/users', ()=> {
        it('Should return all users in the DB', ()=>{
            return request(app)
            .get('/api/v1/users')
            .expect(httpStatus.OK)
            .then((res) => {
                expect(res.body.result).to.be.an('array');
            });
        });

        
    })
    
    describe('POST /api/v1/users ', ()=>{ 
        it('Should create a user in the db', ()=> {
            return request(app)
            .post('/api/v1/users')
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
    
    describe('PUT /api/v1/users/:username ', ()=>{
        
        it('Should update oauthId in users model', (done)=>{
            let user = new UserModel({
                username: "freeman",
                password: "miracle123"
            });
            user.save((err, user)=> {
                request(app)
                .put('/api/v1/users/'+user.username)
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

    describe('POST /api/v1/users/authenticate', ()=> {
        it('it Should authenticate a valid user', (done)=> {
            let user = new UserModel({
                username: "ogbiyoyosky",
                password: "miracle123"
            });
            user.save((err, user)=> {
                request(app)
                .post('/api/v1/users/authenticate')
                .send({
                    username: "ogbiyoyosky",
                    password: "miracle123"
                })
                .expect(httpStatus.CREATED)
                .then((res)=>{
                    expect(res.body.data).to.be.an('object');
                    expect(res.body.data.token).to.be.a('string');
                    done();
                })
            })
        })

        it('it should return error when there is no password', (done)=> {
            let user = new UserModel({
                username: "sirfreeman",
                password: "miracle123"
            });
            user.save((err, user)=> {
                request(app)
                .post('/api/v1/users/authenticate')
                .send({
                    username: "sirfreeman",
                })
                .then((res)=>{
                    expect(res.body.errors).to.be.an('array');
                    expect(res.body.errors[0].detail).to.be.eql('No password specified');
                    done();
                })
            })
        })

        it('it should return error when password less than 6', (done)=> {
            let user = new UserModel({
                username: "sirfreeman",
                password: "miracle123"
            });
            user.save((err, user)=> {
                request(app)
                .post('/api/v1/users/authenticate')
                .send({
                    username: "sirfreeman",
                    password: "mira"
                })
                .then((res)=>{
                    expect(res.body.errors).to.be.an('array');
                    expect(res.body.errors[0].detail).to.be.eql('Password must contain at least 6 characters');
                    done();
                })
            })
        })
    })


})
