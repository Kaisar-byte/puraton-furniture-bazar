import React from 'react'

const Blogs = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Amazing Tiptop Clearance with</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Questions With Answer</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What are the different ways to manage a state in a React application?</summary>
                        <div className="px-4 pb-4">
                            <h2 className='font-bold'>In React applications, managing state is essential for handling dynamic data and ensuring that the UI reflects changes in data over time. There are several ways to manage state in React:</h2> <br />
                            <p><u className='font-bold'>Component State (useState hook):</u> React provides the useState hook, which allows functional components to have local state. You can initialize state variables and update them using setState function returned by useState. This is useful for managing state that is confined to a single component.
                            </p> <br />
                            <p><u className='font-bold'>Context API:</u> React Context provides a way to share state between components without manually passing props through each level of the component tree. You can create a context using createContext and use Provider to provide the context value to its descendants. This is useful for global or application-level state management.
                            </p> <br />

                            <p><u className='font-bold'> Redux:</u> Redux is a predictable state container for JavaScript applications. It helps in managing the state of the entire application in a centralized store, which can be accessed by any component. Redux provides actions to describe state changes and reducers to specify how the state changes in response to those actions.
                            </p>

                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does prototypical inheritance work?</summary>
                        <div className="px-4 pb-4">
                            <p><b>Prototypical inheritance </b> in JavaScript works through a chain of prototypes. Each object has a prototype, and when a property or method is accessed, JavaScript looks for it in the object's prototype and up the chain until it finds it or reaches the end. Constructor functions set prototypes for objects they create, and you can also use Object.create() to create objects with specific prototypes. Avoid using __proto__ directly due to performance and standardization concerns.
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is a unit test? Why should we write unit tests?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>
                                A unit test is a type of software test that validates individual units or components of code in isolation, such as functions or classes, to ensure they behave as expected. Writing unit tests is crucial as they help catch bugs early, isolate issues, provide regression testing, serve as documentation for code behavior, and facilitate refactoring, ultimately contributing to the development of robust and maintainable software.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">React vs. Angular vs. Vue?</summary>
                        <div className="px-4 pb-4">
                            <h2 className='font-bold'>React, Angular, and Vue are three popular JavaScript frameworks/libraries used for building user interfaces, each with its own strengths and use cases.

                            </h2> <br />
                            <p><u className='font-bold'>React:</u>React, developed by Facebook, is a component-based library known for its simplicity, flexibility, and virtual DOM, which enables efficient updates to the UI. It has a large and active community, extensive ecosystem, and is widely used in both web and mobile app development.


                            </p> <br />
                            <p><u className='font-bold'>Angular:</u> Angular, maintained by Google, is a comprehensive framework for building large-scale applications. It provides features like two-way data binding, dependency injection, and a powerful CLI for scaffolding projects. Angular is opinionated and comes with a steep learning curve, but offers strong support for enterprise-level applications.
                            </p> <br />

                            <p><u className='font-bold'> Vue:</u> Vue, created by Evan You, is a progressive JavaScript framework known for its simplicity, ease of integration, and gentle learning curve. Vue provides a flexible and approachable way to build interactive UIs, with features like a reactive data model, component-based architecture, and single-file components. It has gained popularity rapidly due to its simplicity and versatility.
                            </p>

                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default Blogs