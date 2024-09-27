import { diskStorage } from 'multer';

export enum StorageName {
  Video = 'video',
}

// Handle storage upload
const storeService = (storageName: StorageName) => {
  return diskStorage({
    destination: `${process.cwd()}/public/images/${storageName}`,
    filename: (req, file, callback) =>
      // Rename file
      callback(null, new Date().getTime() + '_' + file.originalname),
  });
};

export default storeService;
