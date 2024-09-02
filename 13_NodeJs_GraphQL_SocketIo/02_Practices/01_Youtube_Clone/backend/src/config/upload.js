import multer, { diskStorage } from 'multer';
import compressImages from 'compress-images';

const uploadImage = multer({
  // dest: process.cwd() + '/public/images', // Vấn đề về tên file bị thay đổi
  storage: diskStorage({
    destination: process.cwd() + '/public/images/',
    filename: (req, file, callback) => {
      // Đỗi tên file
      let newName = new Date().getTime() + "_" + file.originalname;
      callback(null, newName);
    }
  })
})

const optimizeImage = (fileName) => {
  const INPUT_PATH_IMAGE = process.cwd() + '/public/images/' + fileName;
  const OUTPUT_PATH = process.cwd() + '/public/files/';
  const OPTION = { compress_force: false, statistic: true, autoupdate: true }
  const FIND_FILE_OP = false;

  const engineJpg = { jpg: { engine: "mozjpeg", command: ["-quality", "70"] } };
  const enginePng = { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } };
  const engineSvg = { svg: { engine: "svgo", command: "--multipass" } };
  const engineGif = { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } };

  const callback = (error, completed, statistic) => {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  };

  compressImages(
    INPUT_PATH_IMAGE,
    OUTPUT_PATH,
    OPTION,
    FIND_FILE_OP,
    engineJpg,
    enginePng,
    engineSvg,
    engineGif,
    callback,
  )
}

export {
  uploadImage,
  optimizeImage,
}
