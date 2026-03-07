function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {year} Alex Spalvieri</p>
      <p>Built with React, Node.js, and a focus on practical product engineering.</p>
    </footer>
  );
}

export default Footer;
