import express from 'express';
import passport from 'passport';
import positionController from './position.controller';
import { isRoot } from '../../middlewares/is-root';

export const positionRouter = express.Router();
// 1.authenticated user admin can add position for employee
// 2. Create, update, delete 

const rootPolicy = [passport.authenticate('jwt', { session: false }), isRoot];

positionRouter
  .route('/')
  .post(rootPolicy, positionController.create);
//   .get(passport.authenticate('jwt', { session: false }), positionController.findAll);

positionRouter
    .route('/:id')
    .get(passport.authenticate('jwt', { session: false }), positionController.findOne)
    //.put(rootPolicy, positionController.update);