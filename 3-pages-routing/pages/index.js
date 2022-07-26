import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Client</Link>
        </li>
        <li>
          <Link href="/blogs/2022/15">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
