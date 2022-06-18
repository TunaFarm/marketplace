import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

const UserSection = () => {
  const { user, error, isLoading } = useUser();

  // If statically generated, don't render anything.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="text-white">
      {isLoading && <span>Loading...</span>}
      {error && <span>Error</span>}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      {!isLoading && !user && <a href="/api/auth/login">Login</a>}
      {user && (
        <div>
          <span>Welcome, {user.name}</span>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </div>
  );
};

export default UserSection;
