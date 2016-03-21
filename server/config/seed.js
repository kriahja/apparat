/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Cat from '../api/cat/cat.model';
import Outsider from '../api/outsider/outsider.model';
import Product from '../api/product/product.model';

Outsider.find({}).removeAsync()
.then(() => {
  Outsider.create({
    Store: 'Outsider',
    year: 2016,
    owner: '56dd2e507016b76419d107ek',
    iconurl: 'Here comes a pictureLink'
    // orders: [
    //   {product:'56dd2e507016b76419d107eh'},
    //     {product:'56dd2e507016b76419d107eg'}
    // ]
  });
});

Product.find({}).removeAsync()
.then(() => {
  Product.create({
    name: 'Shampoo1',
    details: 'Pretty awesome',
    picture: 'Here comes a pictureLink',
    video: 'Here comes a videoLink'
  }, {
    name: 'Shampoo2',
    details: 'Hoopla!',
    picture: 'Here comes a pictureLink',
    video: 'Here comes a videoLink'
  });
});

Cat.find({}).removeAsync()
  .then(() => {
    Cat.create({
      name: 'Garfield',
      age: 120
},
{
    name: 'Cujo',
    age: 220
    });
  });


Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      _id: '56dd2e507016b76419d107ek',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
