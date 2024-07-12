import Image from "../components/ui/Image";
const BlogCard = () => {
  return (
    <>
      <div className="bg-card text-card-foreground mx-auto max-w-xs overflow-hidden rounded-lg shadow-md">
        <Image
          src="https://placehold.co/254x213"
          alt="abstract painting of a sunset"
          className="h-48 w-full object-cover"
        />
        <div className="px-6 py-4">
          <h2 className="mb-2 text-lg font-semibold">The Coldest Sunset</h2>
          <p className="text-muted-foreground mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
              #photography
            </span>
            <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
              #travel
            </span>
            <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
              #winter
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
