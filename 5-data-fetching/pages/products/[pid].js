import path from "path";
import fs from "fs/promises";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct || loadedProduct.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { pid } = params;

  const data = await getData();
  const product = data.products.find((product) => product.id === pid);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  console.log(pathsWithParams);

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default ProductDetailPage;
