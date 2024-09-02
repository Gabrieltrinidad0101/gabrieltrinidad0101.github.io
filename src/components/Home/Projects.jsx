import { SectionTitle } from '../SectionTitle'
import { Container } from '../Container'
import Image from 'next/image'

export const Project = async ({image,description,title,code,demo,items,isFull,bgWhite,codeAndDemo }) => {
    return <div
        className={isFull 
            ? "relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-4 md:flex md:flex-row-reverse md:items-center p-1 group overflow-hidden" 
            : "relative bg-dark-100 shadow dark:shadow-primary-50/10 dark:bg-dark-900 w-full rounded-3xl min-h-[340px] md:col-span-2 p-1 group overflow-hidden"}
    >
        <figure className={`w-full rounded-3xl overflow-hidden ${bgWhite && "bg-white" }`}>
            <Image
                className="w-full h-full min-h-[232px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                src={image}
                alt={title}
                width={300}
                height={300}
                loading="lazy"
            />
        </figure>
        <div className="p-6">
            <h1 className="font-bold text-lg text-primary-700 dark:text-primary-400">{title}</h1>
            <p className="mt-4 text-dark-700 dark:text-dark-200">{description}</p>
            {code && <a href={code} role="link" target='_blank' className="mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                {codeAndDemo ? codeAndDemo : "Code"}
            </a>}
            {demo && <a href={demo} role="link" target='_blank' className="mt-2 ml-2 inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                Demo
            </a>}
            <ul className="flex gap-1 flex-wrap text-sm mt-4">
                {
                    items.map((item,index)=>
                        <li
                        key={index}
                            className="rounded-full px-2 border-dark-200 dark:border-dark-800 bg-dark-300/60 dark:bg-primary-900/30 backdrop-blur-sm text-dark-700 dark:text-dark-200"
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    </div>
}


export const Projects = async () => {
    return (
        <Container id="projects">
            <SectionTitle>
                <svg className="size-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
                Projects
            </SectionTitle>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
                <Project 
                    image="/designcreate.png" 
                    title="Design Create" 
                    isFull={true}
                    bgWhite={true}
                    demo={"https://gabrieltrinidad.com/DesignCreate/#/login"}
                    code="https://github.com/Gabrieltrinidad0101/DesignCreate"
                    description="Design Create offers a comprehensive application that empowers you to design and create various assets, including posts, logos, and more, with ease and completeness." 
                    items={["Node.js","Mongodb","Cypress","CI/CD","Docker","Mui","Jest","React.tsx","Typescript","Nginx","Sentry","Hexagonal Architecture",]}
                />
                <Project 
                    image="./makeLanguage.png" 
                    title="Make Language" 
                    isFull={true}
                    codeAndDemo="Code and Demo"
                    code="https://github.com/Gabrieltrinidad0101/Make-Language"
                    description="Make Language is a robust tool and framework that enables you to craft your own programming language. With its exceptional API, you can effortlessly integrate additional features to customize your language further" 
                    items={["Go"]} 
                />
                <Project 
                    image="/fire-ball.png" 
                    title="Fire Ball - Multiplayer Video Game" 
                    code="https://github.com/Gabrieltrinidad0101/Fire-Ball-Multi-Player-Game"
                    demo="https://gabrieltrinidad.com/Fire-Ball-Multi-Player-Game/#/login"
                    description="At one point in our lives, like many programmers, we yearned to create a multiplayer game. It was this desire that led me to develop Fire Ball." 
                    items={["Go","React.tsx","Typescript","Mysql","Microservices",]}
                />
                <Project 
                    image="/pathfinding.png" 
                    title="Path Finding" 
                    demo="https://gabrieltrinidad0101.github.io/pathFindingVisualization/"
                    code="https://github.com/Gabrieltrinidad0101/pathFindingVisualization"
                    description="Let's dive into a performance comparison between two algorithms: Dijkstra and A*. As we explore their efficiency, we can also delight in the captivating animations they offer." 
                    items={["React.js"]} 
                />
            </div>
        </Container>
    )
}
