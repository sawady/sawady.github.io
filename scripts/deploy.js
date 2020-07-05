const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'github.com:sawady/pwa-experiment.git',
        user: {
            name: 'sawady',
            email: 'sawady.faso@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)