import { useEffect, useState } from "react";

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSalesHandler();
  }, []);

  async function fetchSalesHandler() {
    setIsLoading(true);
    const response = await fetch("https://nextjs-course-92950-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json");

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    const transformedSales = [];

    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }

    setSales(transformedSales);
    setIsLoading(false);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data found.</p>;
  }

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
