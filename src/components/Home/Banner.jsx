import Image from 'next/image'
import { Pill } from '../Pill'
import EmailIcon from '../icons/Email'
import GitHubIcon from '../icons/GitHub'
import LinkedInIcon from '../icons/LinkedIn'
export const Banner = () => {
    return (
        <section className="relative mx-auto container px-2 pt-44 lg:h-screen overflow-hidden lg:pt-0 lg:w-[740px] lg:flex lg:flex-col lg:justify-center">
            <div className="text-left lg:flex lg:flex-row-reverse lg:justify-center lg:items-center md:gap-x-4">
                <div className="Hero-image flex justify-center mb-6 w-16 lg:w-1/5 ">
                    <Image
                        src="/profile.png"
                        alt="gabriel Trinidad"
                        width={200}
                        height={200}
                        className="drop-shadow-sm w-[130px] rounded-full  object-contain shadow-lg dark:shadow-dark-900"
                        loading="lazy"
                    />
                </div>
                <header className="lg:w-4/5">
                    <h1 className="text-3xl font-bold lg:text-5xl  text-dark-700 dark:text-dark-200">
                        Hi, <span className=" text-primary-600 dark:text-primary-400">I am Gabriel Trinidad</span>
                    </h1>
                    <h2 className="lg:text-xl mt-6 md:mt-10 text-dark-700 dark:text-dark-200 text-pretty">
                        +3 years of experience.{' '}
                        <span className="text-crusta-800 dark:text-crusta-300 ">
                            FullStack Developer
                        </span>
                        .{' '}
                        <span className=" text-daintree-700 dark:text-daintree-200 ">
                         Passionate software developer 
                        </span>{' '}
                        with a focus on creating innovative and efficient solutions committed to continuous improvement and excellence in each project.
                    </h2>
                </header>
            </div>
            <ul className="mt-10 flex flex-wrap gap-4 justify-start ">
                <li>
                    <Pill url={'https://github.com/Gabrieltrinidad0101'} externalUrl={true}>
                        <GitHubIcon className="size-4 md:size-6" /> GitHub
                    </Pill>
                </li>
                <li>
                    <Pill url={'mailto:gabrielqwes123@gmail.com'} externalUrl={true}>
                        <EmailIcon className="size-4 md:size-6" /> gabrielqwes123@gmail.com
                    </Pill>
                </li>
                <li>
                    <Pill url={'https://www.linkedin.com/in/gabriel-trinidad-4407b8281/'} externalUrl={true}>
                        <LinkedInIcon className="size-4 md:size-6" />Linkedin
                    </Pill>
                </li>
            </ul>
            <div className="absolute hidden md:flex bottom-4 w-full justify-center">
                <a
                    href="#experience"
                    className="md:flex gap-2 animate-bounce text-primary-500 dark:text-primary-400 font-bold"
                >
                    Experience{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                        />
                    </svg>
                </a>
            </div>
        </section>
    )
}
