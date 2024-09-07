import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// The root provides a resolver function for each API endpoint
const graphqlResolver = {
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

export default graphqlResolver;
