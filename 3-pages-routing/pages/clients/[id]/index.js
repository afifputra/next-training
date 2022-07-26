import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push(`/clients/${router.query.id}/rumah-sakit`);
  };
  return (
    <div>
      <h1>Client Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
