import { useRouter } from "next/router";

function UsersSingle() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Hello Form users {id}</div>;
}

export default UsersSingle;
