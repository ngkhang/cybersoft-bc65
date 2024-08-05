import { Op } from 'sequelize';
import initModels from '../models/init-models.js';
import responseData from '../config/response.js';
import sequelize from '../models/connect.js';

const model = initModels(sequelize);

const getVideos = async (req, res) => {
  let data = await model.video.findAll();
  responseData(data, 'Thành công', 200, res);
}

const getTypes = async (req, res) => {
  let data = await model.video_type.findAll();
  responseData(data, 'Thành công', 200, res);
}

const getVideosType = async (req, res) => {
  let { typeId } = req.params;

  let data = await model.video.findAll({
    where: {
      type_id: typeId,
    }
  })

  responseData(data, 'Thành công', 200, res)
}

const searchVideos = async (req, res) => {
  let { keyword } = req.params;

  let data = await model.video.findAll({
    where: {
      video_name: {
        [Op.like]: `%${keyword}%`
      }
    }
  });

  responseData(data, 'Thành công', 200, res);
}

const getVideosPage = async (req, res) => {
  let { page } = req.params;

  let pageSize = 3;
  let index = (page - 1) * pageSize;

  let data = await model.video.findAll({
    offset: index,
    limit: pageSize,
  });

  let totalPage = Math.ceil(await model.video.count() / pageSize);

  responseData({ data, totalPage }, 'Thành công', 200, res)
}

export {
  getVideos,
  getTypes,
  getVideosType,
  searchVideos,
  getVideosPage,
}