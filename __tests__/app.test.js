const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    const expected = [
      {
        'id': '1',
        'issidekick': false,
        'lives': 3,
        'name': 'Felix',
        'type': 'Tuxedo',
        'url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
        'year': 1892,
      },
      {
        'id': '2',
        'issidekick': false,
        'lives': 7,
        'name': 'Garfield',
        'type': 'Orange Tabby',
        'url': 'https://static.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg',
        'year': 1978,
      },
      {
        'id': '3',
        'issidekick': false,
        'lives': 9,
        'name': 'Duchess',
        'type': 'Angora',
        'url': 'https://static.wikia.nocookie.net/disney/images/e/eb/Profile_-_Duchess.jpeg',
        'year': 1970,
      },
      {
        'id': '4',
        'issidekick': true,
        'lives': 1,
        'name': 'Stimpy',
        'type': 'Manx',
        'url': 'https://static.wikia.nocookie.net/renandstimpy/images/c/c1/Ren-stimpy-25-anniversar-hp2.png',
        'year': 1990,
      },
      {
        'id': '5',
        'issidekick': true,
        'lives': 1,
        'name': 'Sylvester',
        'type': 'Tuxedo',
        'url': 'https://static.wikia.nocookie.net/charactercommunity/images/7/73/SylvesterDance.png',
        'year': 1945,
      },
      {
        'id': '6',
        'issidekick': false,
        'lives': 8,
        'name': 'Tigger',
        'type': 'Tiger',
        'url': 'https://www.pinclipart.com/picdir/big/150-1504133_tigger-tigger-cartoon-me-clipart-png-image-download.png',
        'year': 1928,
      },
      {
        'id': '7',
        'issidekick': false,
        'lives': 9,
        'name': 'Hello Kitty',
        'type': 'Angora',
        'url': 'https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_360HelloKittySANRIOPIN.png?v=1627413934',
        'year': 1974,
      },
      {
        'id': '8',
        'issidekick': true,
        'lives': 6,
        'name': 'Hobbes',
        'type': 'Tiger',
        'url': 'https://sketchok.com/images/articles/01-cartoons/000-va/102/10.jpg',
        'year': 1985,
      }
    ];
    expect(res.body).toEqual(expected);
  });

  it('/cats/:id should return cat detail', async () => {
    const res = await request(app).get('/cats/1');
    const felix = {
      id: '1',
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
      year: 1892,
      lives: 3,
      issidekick: false,
    };
    expect(res.body).toEqual(felix);
  });

  afterAll(() => {
    pool.end();
  });
});
