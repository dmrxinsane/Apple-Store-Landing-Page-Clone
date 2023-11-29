'use client'
import { useEffect, useState } from 'react'
import './globals.css'
import axios from 'axios'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
