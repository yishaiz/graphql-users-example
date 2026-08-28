const graphql = require('graphql')


const {
    GraphQLObjectType,
    GraphQLString
} = graphql


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: graphql.GraphQLInt }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQuertType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                
            }
        }
    }
})