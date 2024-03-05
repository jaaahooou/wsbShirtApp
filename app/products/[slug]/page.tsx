import React from 'react'
import { useRouter } from 'next/router'


export default function Page({ params }: { params: { slug: string } }) {
    return <div>Product id {params.slug}</div>
  }