import useFetchQuery from "@/hooks/useFetchQuery";
import BlogCard from "./BlogCard";
import Blog from "@/interfces/Blog";
import apiInstance from "@/config/axios";
import FakeBlogData from "@/fakeData/FakeBlogData";
import { useEffect, useState } from "react";
import Paginator from "@/components/ui/Paginator";

const Blogs = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const { data, isLoading } = useFetchQuery({
    url: `/blogs?pagination[pageSize]=${pageSize}&pagination[page]=${page}`,
    queryKey: ["blogs", page, pageSize],
  });

  useEffect(() => {
    apiInstance.post("/blogs", { data: FakeBlogData() });
  }, []);

  if (isLoading) return <p>Loading........</p>;
  const onPrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  const onNextPage = () => {
    if (page === data.meta.pagination.pageCount) return;
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <div className="my-7 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.length ? (
          data.data.map((blog: Blog) => {
            if (blog.attributes?.imgUrl) {
              console.log(blog.attributes.imgUrl);
            } else {
              console.log("Image URL is not available.");
            }
            return <BlogCard key={blog.id} attributes={blog.attributes} />;
          })
        ) : (
          <p>No blogs available</p>
        )}
      </div>
      {data?.data?.length && (
        <div className="flex justify-between align-middle">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(+e.target.value)}
          >
            <option value="15">15 per page</option>
            <option value="30">30 per page</option>
            <option value="60">60 per page</option>
          </select>
          <Paginator
            total={data.meta.pagination.total}
            page={data.meta.pagination.page}
            lastPage={data.meta.pagination.pageCount}
            onPrev={onPrevPage}
            onNext={onNextPage}
          />
        </div>
      )}
    </>
  );
};

export default Blogs;
