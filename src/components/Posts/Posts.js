import React from 'react'
import { gql, useQuery } from "@apollo/client"

const GET_POSTS = gql`
    query {
      getPosts {
        title
        content
      }
    }
`;

export default function Posts() {
  const { loading, data, error } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="container py-4">
      {data.getPosts.map(({ title, content }, index) => (
        <div key={index}>
          <div className="list-group">
            <div className="list-group-item mb-1">
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
