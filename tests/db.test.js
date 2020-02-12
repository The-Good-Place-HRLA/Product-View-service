const mongoose = require('mongoose');
const faker = require('faker');
const Product = require('../database/schema.js');
const helpers = require('../database/dbHelpers.js');

beforeAll(async () => {
    const dbURI = 'mongodb://localhost/REItest';
    await mongoose.connect(dbURI, { useNewUrlParser: true })
});

beforeEach(async () => {
    await Product.create({
        "productId": 0,
        "name": "Rex Specs Dog Goggles - Small",
        "brand": "Rex Specs",
        "item": 160541,
        "color": "Black/Clear/Smoke",
        "rating": 5.0,
        "price": 79.95,
        "size": "S",
        "images": [
            "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-small-black.jpg",
            "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-small-black-dogfront.jpg",
            "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-small-black-dogfront2.jpg",
            "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-small-pink-dogfront.jpg",
            "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-large-green-dogsfront.jfif",
            "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-large-green-dogside.jfif"
        ]
    })
});

afterEach(async () => {
    await Product.deleteMany({});
})

afterAll(async (done) => {
    await mongoose.connection.collections.products.deleteMany({});
    done();
})

describe('mongoose database helpers', () => {
    it('gets all items from the database', async (done) => {
        const response = await helpers.get();
        expect(response.length).toBe(1);
        expect(response[0].brand).toBe('Rex Specs')
        done();
    })

    it('gets one item from the database', async (done) => {
        const response = await helpers.getOne(0);
        expect(response.length).toBe(1);
        expect(response[0].brand).toBe('Rex Specs')
        done();
    })

    it('adds a new item to the database', async (done) => {
        const response = await helpers.create(
            {
                "productId": 1,
                "name": "Rex Specs Dog Goggles - Large",
                "brand": "Rex Specs",
                "item": 160479,
                "color": "Army Green/Clear/Smoke",
                "rating": 5.0,
                "price": 79.95,
                "size": "L",
                "images": [
                    "https://fec-rei-product-img.s3-us-west-1.amazonaws.com/(Rex+Specs)+Dog+Goggles+-+Large.jpeg",
                    "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-large-green-dogtop.jfif",
                    "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-small-black-goggles.jpg",
                    "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-small-pink-dogfront.jpg",
                    "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-large-green-dogsfront.jfif",
                    "https://hr34-fec-rei.s3-us-west-1.amazonaws.com/Rex-specs-dog-goggles-large-green-dogside.jfif"
                ]
            },
        )
        expect(response.length).toBe(1)
        expect(response[0].productId).toBe(1)
        const newResponse = await helpers.get();
        expect(newResponse.length).toBe(2);
        done();
    })

    it('updates an item in the database', async (done) => {
        const response = await helpers.updateOne(
            0, { 'productId': 1 }
        )
        const newResponse = await helpers.getOne(1)
        expect(newResponse.length).toBe(1)
        done();
    })

    it('deletes an item from the database', async (done) => {
        const response = await helpers.deleteOne(0);
        const newResponse = await helpers.get();
        expect(newResponse.length).toBe(0);
        done();
    })

    it('deletes all items from the database', async (done) => {
        const response = await helpers.deleteAll();
        const newResponse = await helpers.get();
        expect(newResponse.length).toBe(0);
        done();
    })

})