import { request, gql } from "graphql-request";

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHQCMS_ENDPOINT;

export const getPosts = async () => {
    // creating a graphql query
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            excerpt
            slug
            featuredImage {
              url
            }
            categories {
              alug
              name
            }
          }
        }
      }
    }
  `;

//   make a request to the graphql endpoint
    const response = await request(graphqlApi,query);
    return response.postConnection.edges
};
