const Footer = () => {
  return (
    <footer className="bg-black/90 py-12">
      <div className="container mx-auto">
        <p className="px-4 text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} Inventory Manage</p>
      </div>
    </footer>
  );
};

export default Footer;
