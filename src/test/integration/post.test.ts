import {expect} from 'chai';
import * as httpStatus from 'http-status';
import app from '../../config/express';
import PostModel from '../../api/post/post.model'
import 'mocha';
const request = require('supertest');
require('ts-mocha');

describe('Post', ()=> {
    beforeEach(function (done) {
        PostModel.deleteMany({}, (err) => {
            done()
        })
    });

    describe('POST /api/v1/posts ', () => {
        it('Should create a post in the db', () => {
            return request(app)
                .post('/api/v1/posts')
                .send({
                    author: 'ogbiyoyo',
                    permlink : 'https://steemit.com/@sirfreeman',
                    postImage: 'https://steemit.com/@sirfreeman',
                    postDescription : 'hello post',
                    postTitle : 'hello post',
                    Tags: ['fashlogue', 'contempatory'],
                    postedTo: ['fashlogue', 'steemblockchain']  
                })
                .expect(httpStatus.CREATED)
                .then((res) => {
                    expect(res.body.data)
                        .to
                        .be
                        .an('object');
                })

        });
    });

    describe('GET api/v1/posts', () => {
        it('it should fetch all post in the database', ()=> {
            return request(app)
            .get('/api/v1/posts')
            .expect(httpStatus.OK)
            .then(res => {
                expect(res.body.result).to.be.an('array');
            })
        })
    })

    

})