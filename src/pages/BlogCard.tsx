import Blog from "@/interfces/Blog";
import Image from "../components/ui/Image";
interface BlogCardProps extends Blog {}

const BlogCard = ({
  attributes: { title, description, imgUrl },
}: BlogCardProps) => {
  return (
    <>
      <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-card text-card-foreground shadow-md">
        <Image
          src={imgUrl}
          alt="abstract painting of a sunset"
          className="h-48 w-full object-cover"
        />
        <div className="px-6 py-4">
          <h2 className="mb-2 text-lg font-semibold">{title}</h2>
          <p className="mb-4 line-clamp-2 text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              #photography
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              #travel
            </span>
            <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
