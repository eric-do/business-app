const courses = [
  {
    title: 'Frontend',
    schedule: [
      {
        title: 'Sprint 1: React',
        description: `Week 1 assumes the student has a moderate understanding of Javascript
                      and HTML. There is minimal focus on CSS in this sprint, as the majority
                      of React complexity is focused on data (state) management.`
      },
      {
        title: 'Sprint 2: Test Driven Development',
        description: `Test Driven Development is a crucial skill applicable to any part of the stack,
                      yet absent from many bootcamps and workplaces. Learn how to write safe and maintable
                      code that will save you and your team countless hours in refactors and manual testing.`
      },
      {
        title: 'Sprint 3: Global state management',
        description: `Tools like Redux and React Query will allow you to efficiently manage your data, as
                      well as keep it in sync with any server you interact with. Learn when and how to use
                      the various libraries available.`
      },
      {
        title: 'Sprint 4: Typescript',
        description: `As modern code bases become more complex, using a statically typed lanaguage becomes crucial.
                      Typescript allows you to write your code with confidence.`
      }
    ],
  },
  {
    title: 'Backend',
    schedule: [
      {
        title: 'Sprint 1: Introduction to servers',
        description: `We will model the client server relationship, and build your first Express server.
                      You will be building the backend code for your React application.`
      },
      {
        title: 'Sprint 2: Test driven development',
        description: `Building on the importance of TDD, we'll continue writing our server code, but with
                      tests first.`
      },
      {
        title: 'Sprint 3: Express best practices',
        description: `In this sprint, we'll take some time to refactor our previous code to be more reusable.
                      We'll also go over important concepts like error handling and input validation. We'll
                      make use of middleware to accomplish these goals.`
      },
      {
        title: 'Sprint 4: Deployment technologies',
        description: `In the real world, many sites have hundreds, if not thousands of servers running their
                      applications at scale. It's crucial to learn technologies such as Docker and CircleCI
                      to make sure your deployments run smoothly and with as little manual work
                      as possible.`
      },
    ],
  },
  {
    title: 'Algorithms',
    schedule: [
      {
        title: 'Sprint 1: Introduction to algorithms and arrays',
        description: `In this sprint we'll learn about time complexities of each data structure and tradeoffs
                      involved in using each. We'll also review common strategies in solving array problems.
                      Students will be pair programming and working on common patterns such as sliding window.`
      },
      {
        title: 'Sprint 2: Linked Lists',
        description: `Linked Lists are a great data structure when frequent inserts are made into a list.
                      Students will pair program and work on common patterns.`
      },
      {
        title: 'Sprint 3: Binary Search Trees',
        description: `Trees are one of the most commonly used data structures for efficient searching. They are
                      also the base of complex topics like recursion and dynammic programming.`
      },
      {
        title: 'Sprint 4: Graphs',
        description: `Learn how to find efficient paths.`
      }
    ]
  },
]

export default courses;