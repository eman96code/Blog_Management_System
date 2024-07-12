import Paginator from "@/components/ui/Paginator";

// interface Props {}
const Home = () => {
  return (
    <header>
      <div className="min-h-screen bg-background">
        <div className="relative">
          <img
            src="https://placehold.co/800x400"
            alt="Woman with laptop in server room"
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-lg rounded-lg bg-card p-6 text-card-foreground">
              <span className="rounded bg-primary px-2 py-1 text-primary-foreground">
                Technology
              </span>
              <h1 className="mt-4 text-2xl font-bold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
              <div className="mt-4 flex items-center space-x-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Author's avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p>Jason Francisco</p>
                  <p className="text-muted-foreground">August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Paginator />
      </div>
    </header>
  );
};

export default Home;
