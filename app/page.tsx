import React from 'react'
import Header from '@/components/Header'
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group"
import { Card, CardAction, CardContent, CardDescription,CardFooter, CardHeader,CardTitle } from '@/components/ui/card'
import BottomBar from '@/components/bottom'
const Home = () => {
  return (
    <>
    <div className='sticky'>
    <Header />
    </div>
    <div>
    <InputGroup className="max-w-md mx-auto mt-8">
      <InputGroupAddon>Projects</InputGroupAddon>
      <InputGroupInput type="text" placeholder="Search by project name" />
    </InputGroup>
    </div>
    <div className="max-w-lg mx-auto mt-8 text-center">
      <span className='font-bold text-[35px] [text-shadow:0_2px_6px_rgba(0,0,0,0.25)]'>
        Our projects
      </span>
      <br />
      <span className='text-gray-600 leading-relaxed [text-shadow:0_2px_6px_rgba(0,0,0,0.25)]'>
        We deliver innovative software solutions that transform businesses and 
        drive growth.
      </span>
    </div>
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
    <div className='mt-8'>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Project 1</CardTitle>
          <CardDescription>Software Development</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Developing a new web application for client management.</p>
        </CardContent>
        <CardFooter>
          <p>Completed</p>
        </CardFooter>
      </Card>
    </div>
    <div className='mt-8'>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Project 1</CardTitle>
          <CardDescription>Software Development</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Developing a new web application for client management.</p>
        </CardContent>
        <CardFooter>
          <p>Completed</p>
        </CardFooter>
      </Card>
    </div>
    <div className='mt-8'>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Project 1</CardTitle>
          <CardDescription>Software Development</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Developing a new web application for client management.</p>
        </CardContent>
        <CardFooter>
          <p>Completed</p>
        </CardFooter>
      </Card>
    </div>
    <div className='mt-8'>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Project 1</CardTitle>
          <CardDescription>Software Development</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Developing a new web application for client management.</p>
        </CardContent>
        <CardFooter>
          <p>Completed</p>
        </CardFooter>
      </Card>
    </div>
    </div>
    <BottomBar />
    
    
    </>
    
  )
}

export default Home