import express from 'express';
import { getType, getVideo, getVideoPage, getVideoType } from '../controllers/video.controller.js';

const videoRouter = express.Router();

videoRouter.get('/get-video', getVideo);
videoRouter.get('/get-type', getType);
videoRouter.get('/get-video-type/:typeId', getVideoType);
// Option 1: Using params
// videoRouter.get('/get-video-page/:page', getVideoPage);

// Option 2: Using query
videoRouter.get('/get-video-page', getVideoPage);

export default videoRouter;
