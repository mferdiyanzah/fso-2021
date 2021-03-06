import React from 'react'

const Header = ({course}) =>{
  return <h1>{course}</h1>
}

const Part = ({ name, exercises}) => {
  return <p>{name}: {exercises}</p>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => <Part name={part.name} exercises={part.exercises} key={part.id}/>)}
    </div>
  )
}

const Total = ({parts}) => {
  return <p><b>Total of exercises {parts.reduce((s, p) => s+p.exercises, 0)}</b></p>
}

function Course() {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <Header course={course[0].name}/>
      <Content parts={course[0].parts}/>
      <Total parts={course[0].parts}/>
      <Header course={course[1].name}/>
      <Content parts={course[1].parts}/>
      <Total parts={course[1].parts}/>
    </div>
  )
}

export default Course
