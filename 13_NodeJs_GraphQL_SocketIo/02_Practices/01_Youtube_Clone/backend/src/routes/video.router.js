import express from 'express';
import { getTypes, getVideosPage, getVideos, getVideosType, searchVideos, getVideoDetail } from '../controllers/video.controller.js';
import { middlewareToken } from '../config/jwt.js';

const videoRouter = express.Router();

videoRouter.get('/get-videos', middlewareToken, getVideos);
videoRouter.get('/get-types', middlewareToken, getTypes);
videoRouter.get('/get-videos-type/:typeId', middlewareToken, getVideosType);
videoRouter.get('/search/:keyword', middlewareToken, searchVideos);
videoRouter.get('/get-videos-page/:page', middlewareToken, getVideosPage);
videoRouter.get('/get-video-detail/:videoId', middlewareToken, getVideoDetail);

export default videoRouter;
