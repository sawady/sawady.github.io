const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'git@github.com:sawady/sawady.github.io.git',
        user: {
            name: 'sawady',
            email: 'sawady.faso@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)