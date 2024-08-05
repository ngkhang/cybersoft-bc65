import express from 'express';
import { getTypes, getVideosPage, getVideos, getVideosType, searchVideos } from '../controllers/video.controller.js';

const videoRouter = express.Router();

videoRouter.get('/get-videos', getVideos);
videoRouter.get('/get-types', getTypes);
videoRouter.get('/get-videos-type/:typeId', getVideosType);
videoRouter.get('/search/:keyword', searchVideos);
videoRouter.get('/get-videos-page/:page', getVideosPage)

export default videoRouter;
