import useFetchQuery from "@/hooks/useFetchQuery";
import BlogCard from "./BlogCard";
import Blog from "@/interfces/Blog";
import apiInstance from "@/config/axios";
import FakeBlogData from "@/fakeData/FakeBlogData";
import { useEffect } from "react";
import Paginator from "@/components/ui/Paginator";

const Blogs = () => {
  const { data, isLoading } = useFetchQuery({
    url: "/blogs",
    queryKey: ["blogs"],
  });

  useEffect(() => {
    apiInstance.post("/blogs", { data: FakeBlogData() });
  }, []);

  if (isLoading) return <p>Loading........</p>;
  if (data?.data?.length) console.log(data.meta.pagination);
  return (
    <>
      <div className="my-7 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.length ? (
          data.data.map((blog: Blog) => {
            return <BlogCard key={blog.id} attributes={blog.attributes} />;
          })
        ) : (
          <p>No blogs available</p>
        )}
      </div>
      {data?.data?.length ? (
        <Paginator
          total={data.meta.pagination.total}
          page={data.meta.pagination.page}
          lastPage={data.meta.pagination.pageCount}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Blogs;
