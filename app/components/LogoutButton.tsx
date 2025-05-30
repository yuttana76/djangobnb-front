'use client';

import { useRouter } from "next/navigation";

import { resetAuthCookies } from '../lib/actions';

import MenuLink from "./navbar/MenuLink";

interface LogoutButtonProps {
    onClick: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
    onClick
}) => {
    const router = useRouter();

    const submitLogout = async () => {
        resetAuthCookies();

        router.push('/')
    }

    return (
        <MenuLink
            label="Log out"
            onClick={submitLogout}
        />
    )
}

export default LogoutButton;