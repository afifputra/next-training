import path from "path";
import fs from "fs/promises";

function HomePage(props) {
  const { products } = props;

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  console.log("Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data || data.products.length === 0) {
    // return {
    //   notFound: true,
    // };

    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
