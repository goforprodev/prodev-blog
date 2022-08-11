import React from 'react'
import Link from "next/Link"

const categories = [
    {name: 'Frontend-development', slug: 'frontend-dev'},
    {name: 'Backend-development', slug: 'backend-dev'},	
    {name: 'Full-stack-development', slug: 'full-stack-dev'},
]
const Header = () => {
  return (
    <div>
        <div className="logo">
            <Link href="/">
            Prodev-Blog
            </Link>
        </div>
        <div className="categories">
            {
                categories.map(category => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='px-2 cursor-pointer'>{category.name}</span>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Header