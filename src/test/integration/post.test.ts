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
        it('Should create a user in the db', () => {
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
    })

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

    
    describe('DELETE api/v1/posts/:_id', ()=> {
        it('It should delete a post in the database', () => {
            const post = new PostModel({
                author: 'ogbiyoyo',
                permlink : 'https://steemit.com/@sirfreeman',
                postImage: 'https://steemit.com/@sirfreeman',
                postDescription : 'hello post',
                postTitle : 'hello post',
                Tags: ['fashlogue', 'contempatory'],
                postedTo: ['fashlogue', 'steemblockchain']  
            });
            post.save((err, post)=>{
                 request(app)
                .delete('api/v1/posts'+ post._id)
                .expect(httpStatus[204])
                .then(res=>{
                    expect(res.body.message)
                    .to
                    .be
                    .a('string');
                })
            })
        })
    })

    describe('GET /api/v1/posts/id', ()=> {

        it('Should return a post from the db when passed the id as param', ()=> {
            const post = new PostModel({
                author: 'ogbiyoyo',
                permlink : 'https://steemit.com/@sirfreeman',
                postImage: 'https://steemit.com/@sirfreeman',
                postDescription : 'hello post',
                postTitle : 'hello post',
                Tags: ['fashlogue', 'contempatory'],
                postedTo: ['fashlogue', 'steemblockchain']  
            })
            post.save(post =>{
             request(app)
             .get('/api/v1/users'+ post.user._id)
             .expect(httpStatus.OK)
             .then(res =>
                expect(res.body.result)
                .to
                .be
                .an('object')
             )
            })
         })
 
    })


    describe('PUT api/v1/posts/:_id', ()=> {
        it('it should edit a post in the database with the id', () => {
            const post = new PostModel({
                author: 'ogbiyoyo',
                permlink : 'https://steemit.com/@sirfreeman',
                postImage: 'https://steemit.com/@sirfreeman',
                postDescription : 'hello post',
                postTitle : 'hello post',
                Tags: ['fashlogue', 'contempatory'],
                postedTo: ['fashlogue', 'steemblockchain']  
            });
            post.save((err, post)=>{
                 request(app)
                .put('api/v1/posts'+ post._id)
                .expect(httpStatus[200])
                .then(res=>{
                    expect(res.body.message)
                    .to
                    .be
                    .a('string');
                })
            })
        })
    })



})