import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { responseData } from '../config/response.js';

const model = initModels(sequelize);

const getVideo = async (req, res) => {
  let data = await model.video.findAll();
  // res.send(data);

  responseData(data, 'Thành công', 200, res);
};

const getType = async (req, res) => {
  let data = await model.video_type.findAll();
  responseData(data, 'Thành công', 200, res);
}

const getVideoType = async (req, res) => {
  let { typeId } = req.params;
  let data = await model.video.findAll({
    where: {
      type_id: typeId
    }
  });
  responseData(data, 'Thành công', 200, res);
}

const getVideoPage = async (req, res) => {
  // Option 1: Using params
  // let { page } = req.params;

  // Option 2: Using query
  let { page } = req.query;

  const pageSize = 3;

  let index = pageSize * (page * 1 - 1);

  let data = await model.video.findAll({
    offset: index,
    limit: pageSize,
  });

  let totalPage = Math.ceil(await model.video.count() / pageSize);

  responseData({ data, totalPage }, 'Thành công', 200, res);
}

const getVideoDetail = async (req, res) => {
  let { videoId } = req.params;

  let data = await model.video.findOne({
    where: {
      video_id: videoId,
    },
    include: ['user'],
    // init-models.js: video table - user table. {as: 'user'}
  })

  responseData(data, 'Thành công', 200, res);
}

export {
  getVideo,
  getType,
  getVideoType,
  getVideoPage,
  getVideoDetail,
}