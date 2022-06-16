import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

const UserSection = () => {
  const { user, error, isLoading } = useUser();

  // If statically generated, don't render anything.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {error && <span>Error</span>}
      {!isLoading && !user && <a href="/api/auth/login">Login</a>}
      {user && (
        <div>
          <span>Welcome, {user.name}</span>
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </div>
  );
};

export default UserSection;