import React from 'react'
import Link from 'next/link'
function navbar() {
    return (
        <><ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/contact">About Us</Link>
            </li>
            <li>
                <Link href="/blog/about">Blog Post</Link>
            </li>
        </ul>

        </>
    )
}

export default navbar