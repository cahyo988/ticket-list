import React from 'react'
import Link from 'next/link'
import Logo from './logos.png'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav>
            <Image 
            src={Logo}
            alt='S logo Helpdesk'
            width={60}
            quality={100}
            placeholder='blur'
            />
            <h1>Chaeyo Helpdesk</h1>
            <Link href={'/'}> Dashboard </Link>
            <Link href={'/tickets'}> tickets </Link>
            <Link href={'/tickets/create'}> Make a new tickets </Link>
        </nav>
    )
}
