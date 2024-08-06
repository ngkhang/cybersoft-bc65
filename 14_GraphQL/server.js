import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();

app.listen(8080);

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
let prisma = new PrismaClient();

// Khởi tạo đối tượng -> Định dạng là chuỗi
const schema = buildSchema(`
  type Video {
    video_id: Int          
    video_name: String       
    thumbnail: String       
    description: String        
    views: Int
    source: String   
    user_id: Int
    type_id: Int
  }

  type Query {
    getVideoDetail(videoId: Int): Video
    getListVideo: [Video]
  }

  type Mutation {
    createVideo: Int
  }
`);

const resolver = {
  getVideoDetail: async ({ videoId }) => {
    return await prisma.video.findUnique({
      where: {
        video_id: Number(videoId)
      }
    })
  },

  getListVideo: async () => {
    return await prisma.video.findMany()
  },

  createVideo: () => { return 100; }
};

// Hỗ trợ truy cập vào UI để thao tác với GraphQL
app.use('/grap', graphqlHTTP({
  schema: schema,       // Khai bào đối tượng, tên hàm của GraphQL
  rootValue: resolver,  // Định nghĩa chức năng của các hàm ở schema
  graphiql: true,       // Cho phép truy cập vào UI
}))