import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR("https://nextjs-course-92950-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json", fetcher);

  async function fetcher(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   fetchSalesHandler();
  // }, []);

  // async function fetchSalesHandler() {
  //   setIsLoading(true);
  //   const response = await fetch("https://nextjs-course-92950-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json");

  //   const data = await response.json();

  //   if (!response.ok) {
  //     throw new Error(data.message || "Something went wrong!");
  //   }

  //   const transformedSales = [];

  //   for (const key in data) {
  //     transformedSales.push({
  //       id: key,
  //       username: data[key].username,
  //       volume: data[key].volume,
  //     });
  //   }

  //   setSales(transformedSales);
  //   setIsLoading(false);
  // }
  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (!sales) {
  //   return <p>Failed to load.</p>;
  // }

  return (
    <ul>
      {sales &&
        sales.map((sale) => (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        ))}
    </ul>
  );
};

export default LastSalesPage;
