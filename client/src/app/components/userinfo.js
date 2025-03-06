"use client"

import { signOut } from "next-auth/react";

export default function userInfo({ user }) {
    const handleLogout = async () => {
        await signOut();
    }

    return (
        <div>
            <div>
                Id: {user.id}
            </div>
            <div>
                Name: {user.name}
            </div>
            <div>
                Email: {user.email}
            </div>
        </div>
    )
}