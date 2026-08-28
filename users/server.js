const epxress = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP

const app = epxress()
const PORT = 4000


app.use('/graphQL', expressGraphQL({
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