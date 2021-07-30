
require('dotenv').config();

module.exports = {
  apps : [{
    name: 'Hash#51',
    script: './server/index.js',
    watch: '.',
    env_production: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      MONGO_PASS: process.env.MONGO_PASS,
      SECRET: process.env.SECRET,
      PORT: process.env.PORT,
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-19-29-15.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/id_rsa',
      ref  : 'origin/main',
      repo : 'git@github.com:SpaceExecs/Hash51.git',
      path : '/home/ubuntu/spaceExecs/Hash51',
      env_production: {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        MONGO_PASS: process.env.MONGO_PASS,
        SECRET: process.env.SECRET,
        PORT: process.env.PORT,
      },
      ssh_options: "StrictHostKeyChecking=no",
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};


