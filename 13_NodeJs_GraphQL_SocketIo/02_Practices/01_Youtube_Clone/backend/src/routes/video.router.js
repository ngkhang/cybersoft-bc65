import express from 'express';
import { getTypes, getVideosPage, getVideos, getVideosType, searchVideos, getVideoDetail } from '../controllers/video.controller.js';
import { middlewareToken } from '../config/jwt.js';
import multer, { diskStorage } from 'multer';
import fs from 'fs';

const videoRouter = express.Router();

// process.cwd(): trả về đường dẫn gốc của project
const upload = multer({
  // dest: process.cwd() + '\\public\\images', // Vấn đề về tên file bị thay đổi
  storage: diskStorage({
    destination: process.cwd() + '\\public\\images',
    filename: (req, file, callback) => {
      // Đổi tên file
      let newName = new Date().getTime() + "_" + file.originalname;
      callback(null, newName);
    }
  })
})

videoRouter.post('/upload-video', upload.single('file'), (req, res) => {
  let file = req.file;

  res.send(file);
});

videoRouter.post('/upload-base', upload.single('file'), (req, res) => {
  let file = req.file;
  let urlFile = process.cwd() + '/public/images/' + file.filename;

  fs.readFile(urlFile, (error, data) => {
    let base64 = `data:${file.mimetype};base64,${Buffer.from(data).toString('base64')}`;
    // Lưu chuỗi base64 vào database
    res.send(base64);
  })
});



videoRouter.get('/get-videos', getVideos);
videoRouter.get('/get-types', getTypes);
videoRouter.get('/get-videos-type/:typeId', getVideosType);
videoRouter.get('/search/:keyword', searchVideos);
videoRouter.get('/get-videos-page/:page', getVideosPage);
videoRouter.get('/get-video-detail/:videoId', getVideoDetail);

export default videoRouter;
