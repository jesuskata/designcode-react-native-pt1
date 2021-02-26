// Dependencies
import { gql } from '@apollo/client';

export const CardsQuery = gql`
  query {
    cardsCollection {
      items {
        title
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subtitle
        caption
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`;
