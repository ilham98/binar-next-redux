import Link from "next/link";

function Users() {
  return (
    <div>
      <div>
        <Link href="/users/1">user 1</Link>
      </div>
      <div>
        <Link href="/users/2">user 2</Link>
      </div>
    </div>
  );
}

export default Users;
