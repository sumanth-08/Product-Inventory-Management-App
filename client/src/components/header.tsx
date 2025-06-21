const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-red-50 backdrop-blur py-2">
      <div className="container mx-auto flex h-12 items-center px-8">
        <div className="flex gap-2 items-center">
          <img src="/vite.svg" alt="" className="w-6 h-6" />
          <p className="font-semibold">Product Inventory Management</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
