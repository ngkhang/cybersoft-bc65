import express from 'express';
import { getTypes, getVideosPage, getVideos, getVideosType, searchVideos, getVideoDetail, upload, uploadWithBase64 } from '../controllers/video.controller.js';
import { middlewareToken } from '../config/jwt.js';
import { uploadImage } from '../config/upload.js';

const videoRouter = express.Router();

videoRouter.post('/upload-video', uploadImage.single('file'), upload);
videoRouter.post('/upload-base', uploadImage.single('file'), uploadWithBase64);
videoRouter.get('/get-videos', getVideos);
videoRouter.get('/get-types', getTypes);
videoRouter.get('/get-videos-type/:typeId', getVideosType);
videoRouter.get('/search/:keyword', searchVideos);
videoRouter.get('/get-videos-page/:page', getVideosPage);
videoRouter.get('/get-video-detail/:videoId', getVideoDetail);

export default videoRouter;
