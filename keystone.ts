// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core';

// to keep this file tidy, we define our schema in a different file
import { lists } from './schema';

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'mysql',
      url: "mysql://b26c6c6d625e1d:a82a125b@us-cdbr-east-06.cleardb.net:3306/heroku_2eead248f616536"
      
    },
    lists,
    session,
    storage: {
      local_image: {
       // Images that use this store will be stored on the local machine
       kind: 'local',
       // This store is used for the image field type
       type: 'image',
       // The URL that is returned in the Keystone GraphQL API
       generateUrl: path => `http://localhost:3000/images${path}`,
       // The route that will be created in Keystone's backend to serve the images
       serverRoute: {
       path: '/images',
       },
       // Set serverRoute to null if you don't want a route to be created in Keystone
              // serverRoute: null
       storagePath: 'public/images',
       },
       local_file: {
              // Images that use this store will be stored on the local machine
       kind: 'local',
       // This store is used for the image field type
       type: 'file',
              // The URL that is returned in the Keystone GraphQL API
      generateUrl: path => `http://localhost:3000/files${path}`,
             // The route that will be created in Keystone's backend to serve the images
       serverRoute: {
       path: '/files',
       },
              // Set serverRoute to null if you don't want a route to be created in Keystone
              // serverRoute: null
       storagePath: 'public/files',
      }}
    })
);
