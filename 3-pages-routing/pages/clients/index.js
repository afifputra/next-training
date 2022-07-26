import Link from "next/link";
const ClientsPage = () => {
  const clients = [
    {
      id: 1,
      name: "Client 1",
    },
    {
      id: 2,
      name: "Client 2",
    },
  ];
  return (
    <>
      <h1>Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              <a>{client.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientsPage;
