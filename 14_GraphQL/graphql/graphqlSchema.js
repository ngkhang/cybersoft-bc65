import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language: format string
const graphqlSchema = buildSchema(`
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

export default graphqlSchema;
