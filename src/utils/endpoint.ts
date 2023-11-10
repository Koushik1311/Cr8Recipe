export function graphQlEndpoint() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const endpoint = apiUrl + "/graphql"; // GraphQL server endpoint
  return endpoint;
}
