import {expect} from 'chai';
import * as httpStatus from 'http-status';
import app from '../config/express';
import 'mocha';
const request = require('supertest');
require('ts-mocha');

describe('GET /api/users', ()=> {
    it('Should return all users in the DB', ()=>{
        return request(app)
        .get('/api/users')
        .expect(httpStatus.OK)
        .then((res) => {
            expect(res.body.result).to.be.an('array');
        });
    })   
})