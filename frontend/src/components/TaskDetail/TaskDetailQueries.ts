import gql from 'graphql-tag';



export const TASK_DETAIL = gql`
    query getTask($id: ID!) {
        task(id: $id){
            id
            issue
            state
            created_at
            author {
                id
                fullName
            }
            assignee {
                id
                fullName
            }
            logs {
                author {
                    id
                    fullname
                }
                created_at
                comment
                state
                assignee
            }
        }
    }
`

export const TASK_DETAILsss = gql`
    {
        task {
            id
            fullName
        }
    }
`