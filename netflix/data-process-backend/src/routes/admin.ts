import express, { Router, Request, Response } from 'express';
import authenticateToken from '../middleware/authenticate';
import { allowJuniorMediorSenior, allowMediorSenior, allowSenior } from '../middleware/authorize';

const router : Router = express.Router();

import { getAdminProfile, getJuniorView, getMediorView, getSeniorView, postLoginAdmin } from '../controller/admin';


// Endpoints routes that dont require JWT
router.post('/login', (req: Request, res : Response) => postLoginAdmin(req, res));

// Endpoints routes that require JWT
router.use(authenticateToken)

router.get('/profile/:id', (req: Request, res : Response) => getAdminProfile(req, res));

router.get('/juniorView', allowJuniorMediorSenior,(req: Request, res : Response) => getJuniorView(req, res));

router.get('/mediorView', allowMediorSenior,(req: Request, res : Response) => getMediorView(req, res));

router.get('/seniorView', allowSenior,(req: Request, res : Response) => getSeniorView(req, res));




export = router;
