import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>People List</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/people">
          <a>People List</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
