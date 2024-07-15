interface Blog {
  id?: number;
  attributes: {
    title: string;
    description: string;
    imgUrl: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    tags?: string[];
  };
}
export default Blog;
