/** import lots of dependencies */
import { Navbar, Button, NavbarProps } from "@mantine/core";
import Link from "next/link";
import { AiFillHome, AiFillProject, AiOutlineTeam, AiFillGithub } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0"
import { BiLogIn, BiNews, BiLayer } from "react-icons/bi";

export default function Sidebar(props: Omit<NavbarProps, 'children'>) {
    /** User handler */
    const { user, isLoading } = useUser();

    return (
        <Navbar {...props}>

            {/** Each navbar.section represents an option in the sidebar, with the exception of the first 2
             * The first 2 are the logo and the company name
            */}
            <Navbar.Section>
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <a>
                            <Image src="/drawing.svg" alt="logo" width={30} height={30} priority />
                        </a>
                    </Link>
                </div>
            </Navbar.Section>

            <Navbar.Section>
                <p className="text-center" style={{
                    letterSpacing: "5px"
                }}>SOFTSQUIRREL</p>
                <hr style={{
                    border: '1px double gray',
                    backgroundColor: 'gray'
                }} />
            </Navbar.Section>

            {/** Home link */}
            <Navbar.Section>
                <Link href="/" passHref>
                    <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<AiFillHome size={14} />}>
                        HOME
                    </Button>
                </Link>
            </Navbar.Section>

            {/** Projects link */}
            <Navbar.Section>
                <Link href="/projects" passHref>
                    <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<AiFillProject size={14} />}>
                        PROJECTS
                    </Button>
                </Link>
            </Navbar.Section>

            {/** Team link */}
            <Navbar.Section>
                <Link href="/team" passHref>
                    <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<AiOutlineTeam size={14} />}>
                        TEAM
                    </Button>
                </Link>
            </Navbar.Section>

            {/** Contact link */}
            <Navbar.Section>
                <Link href="/contact" passHref>
                    <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<MdContactMail size={14} />}>
                        CONTACT
                    </Button>
                </Link>
            </Navbar.Section>


            {/** Resources link */}
            <Navbar.Section>
                <Link href="/resources" passHref>
                    <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<BiLayer size={14} />}>
                        RESOURCES
                    </Button>
                </Link>
            </Navbar.Section>

            {/** If the user handler is still loading, render loading... */}
            {isLoading &&
                <p>loading...</p>
            }

            {/** If the user handler is finished loadng */}
            {!isLoading &&
                <div>
                    {/** If the user isn't logged in */}
                    {user === undefined &&
                        <Navbar.Section>
                            <Link href="/api/auth/login" passHref>
                                <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<BiLogIn size={14} />}>
                                    LOGIN
                                </Button>
                            </Link>
                        </Navbar.Section>
                    }

                    {/** Show blog and profile options on the side menu if the user is logged in. */}
                    {user &&
                        <>
                            {/** Blog link */}
                            <Navbar.Section>
                                <Link href="/updates" passHref>
                                    <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<BiNews size={14} />}>
                                        UPDATES
                                    </Button>
                                </Link>
                            </Navbar.Section>

                            {/** Profile link */}
                            <Navbar.Section>
                                <Link href="/profile" passHref>

                                    <Button variant="subtle" color="gray" style={{ width: 180, marginTop: '10px', letterSpacing: "2px" }} leftIcon={<MdContactMail size={14} />}>
                                        PROFILE
                                    </Button>
                                </Link>
                            </Navbar.Section>
                        </>
                    }
                </div>
            }
            <a href="https://github.com/Squirrelcoding/softsquirrel" target="_blank" rel="noopener noreferrer">
                <AiFillGithub size={25} className="bottom-0 fixed ml-2 mb-2 cursor-pointer" />
            </a>
        </Navbar>
    );
}

