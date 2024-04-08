/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePostModel = /* GraphQL */ `
  subscription OnCreatePostModel(
    $filter: ModelSubscriptionPostModelFilterInput
    $owner: String
  ) {
    onCreatePostModel(filter: $filter, owner: $owner) {
      id
      text
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePostModel = /* GraphQL */ `
  subscription OnUpdatePostModel(
    $filter: ModelSubscriptionPostModelFilterInput
    $owner: String
  ) {
    onUpdatePostModel(filter: $filter, owner: $owner) {
      id
      text
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePostModel = /* GraphQL */ `
  subscription OnDeletePostModel(
    $filter: ModelSubscriptionPostModelFilterInput
    $owner: String
  ) {
    onDeletePostModel(filter: $filter, owner: $owner) {
      id
      text
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
