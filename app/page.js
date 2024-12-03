"use client"
import { useContext } from 'react'
import  { AppContext } from './config/AppContext'

export default function Page() {
  const {user} = useContext(AppContext);

    return <h1>Hello, {user}!</h1>
}