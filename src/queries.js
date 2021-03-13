import gql from 'graphql-tag';

export const FETCH_TODOS = gql`
  query getMyTodos($is_public: Boolean) {
    todos(where: {is_public: {_eq: $is_public}}, order_by: {created_at: desc}) {
      id
      title
      created_at
      is_completed
      is_public
      user {
        name
      }
    }
  }
`;
