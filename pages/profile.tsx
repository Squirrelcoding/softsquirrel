import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";
import styled from 'styled-components';
const StyledLink = styled.a`
  color: #428af5;
`

/**
 * The page found at /profile
 */
export default function Profile() {

  /** Get user api utils */
  const { user, error, isLoading } = useUser();

  /** Indicate if the server is still trying to return a user or if it failed to do so */
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  /** Renders if user found successfully */
  if (user) {
    return (
      <div>
        <h1>
        Welcome {user.name}!
        </h1>
        <h3>Whats this?</h3>
        <p>Softsquirrel studios is planning to create a universal account system for all of its products in order to make it easier for both clients and developers to manage softsquirrel services. At the moment these accounts do nothing, but they will recieve a use in the future.</p>
        <Link href="/api/auth/logout" passHref>
            <StyledLink>Log out</StyledLink>
        </Link>
      </div>
    );
  }

  /** If the user object is null (user session not found, not logged in) */
  return <Link href="/api/auth/login">Login</Link>;
}