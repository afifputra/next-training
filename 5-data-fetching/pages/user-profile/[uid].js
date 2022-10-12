const UserIdPages = (props) => {
  const { userId } = props;

  return (
    <div>
      <h1>{userId}</h1>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { uid: userId } = params;

  return {
    props: {
      userId: `user-${userId}`,
    },
  };
};

export default UserIdPages;
