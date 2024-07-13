interface Blog {
  id?: number;
  attributes: {
    title: string;
    description: string;
    imgUrl: string;
    tags?: string[];
  };
}
export default Blog;
