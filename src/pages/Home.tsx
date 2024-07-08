// interface Props {}

const Home = () => {
  return (
    <header>
      <div className="bg-background text-foreground min-h-screen">
        <nav className="flex items-center justify-between p-4 bg-card text-card-foreground">
          <div className="flex items-center space-x-4">
            <img
              src="https://placehold.co/40x40?text=MB"
              alt="MetaBlog Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">MetaBlog</span>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Single Post
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 bg-input border border-border rounded"
            />
            <button className="p-2 bg-primary text-primary-foreground rounded">
              🔍
            </button>
          </div>
        </nav>

        <div className="relative">
          <img
            src="https://placehold.co/800x400"
            alt="Woman with laptop in server room"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-card p-6 rounded-lg max-w-lg text-card-foreground">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">
                Technology
              </span>
              <h1 className="mt-4 text-2xl font-bold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
              <div className="flex items-center mt-4 space-x-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Author's avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p>Jason Francisco</p>
                  <p className="text-muted-foreground">August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background text-foreground min-h-screen">
        <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-card text-card-foreground">
          <div className="flex items-center space-x-4">
            <img
              src="https://placehold.co/40x40?text=MB"
              alt="MetaBlog Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">MetaBlog</span>
          </div>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Single Post
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 bg-input border border-border rounded"
            />
            <button className="p-2 bg-primary text-primary-foreground rounded">
              🔍
            </button>
          </div>
        </nav>

        <div className="relative">
          <img
            src="https://placehold.co/800x400"
            alt="Woman with laptop in server room"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-card p-6 rounded-lg max-w-lg text-card-foreground text-center">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">
                Technology
              </span>
              <h1 className="mt-4 text-2xl md:text-4xl font-bold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-4 space-y-2 md:space-y-0 md:space-x-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Author's avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p>Jason Francisco</p>
                  <p className="text-muted-foreground">August 20, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
