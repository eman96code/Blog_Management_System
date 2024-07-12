import { faker } from "@faker-js/faker";
const FakeBlogData = () => {
  return {
    imgUrl: faker.image.urlPicsumPhotos(),
    title: faker.lorem.slug(3),
    description: faker.lorem.sentence(),
    tags:[faker.lorem.word(),faker.lorem.word()]
  };
};
export default FakeBlogData;
