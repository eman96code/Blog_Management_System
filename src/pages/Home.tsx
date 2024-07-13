import Blogs from "./Blogs";

// interface Props {}
const Home = () => {
  return (
    <header>
      <div className="min-h-screen bg-background">
        <div className="relative">
          <img
            src="https://placehold.co/800x400"
            alt="Blog management system header"
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-lg rounded-lg bg-card p-6 text-card-foreground">
              <span className="rounded bg-primary px-2 py-1 text-primary-foreground">
                Blog Management
              </span>
              <h1 className="mt-4 text-2xl font-bold">
                Welcome to the Blog Management System
              </h1>
              <div className="mt-4 flex items-center space-x-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Admin avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p>Admin User</p>
                  <p className="text-muted-foreground">
                    Manage your blogs efficiently
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Blogs />
        </div>
      </div>
    </header>
  );
};

export default Home;
