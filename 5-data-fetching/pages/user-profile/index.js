const UserProfilePage = (props) => {
  const { username } = props;

  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
};

export default UserProfilePage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      username: "Afif",
    },
  };
};
