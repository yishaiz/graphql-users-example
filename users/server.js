const epxress = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')

const app = epxress()
const PORT = 4000


app.use('/graphQL', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`app is listening to http://localhost:${PORT}`)
})


// todo:
// Change this:

// const expressGraphQL = require('express-graphql');

// to this:

// const expressGraphQL = require('express-graphql').graphqlHTTP; 