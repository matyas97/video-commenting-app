const Footer: React.FC = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto my-12">
        <div className="border-t border-gray-200 pt-4">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; Made by{' '}
            <a
              href="https://github.com/matyas97"
              target="_blank"
              rel="noopener noreferrer"
            >
              matyas97
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
