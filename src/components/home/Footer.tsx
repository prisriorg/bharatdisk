import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="mx-8 md:mx-32 py-8 border-t">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 BharatDisk. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mt-4">
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </footer>
  )
}
