module.exports = {
    build: {
        options: {
          open: {
            target: 'http://localhost:3000'
          },
          keepalive: true,
          port: 3000,
          base: 'build'
        }
    },
    docs: {
        options: {
          open: {
            target: 'http://localhost:3000/app.html'
          },
          keepalive: true,
          port: 3000,
          base: 'docs'
        }
    }
};