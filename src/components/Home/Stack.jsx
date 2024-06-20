import { Container } from '../Container'
import { SectionTitle } from '../SectionTitle'
import { MY_STACK } from '@/helpers/staticData'
import { SetStack } from '@/components/SetStack'
export const Stack = () => {
    return (
        <Container id="technologies">
            <SectionTitle>Technologies</SectionTitle>
            <section className="mt-[10px] grid lg:grid-cols-2 lg:grid-rows-2 gap-6 lg:place-content-center">
                <SetStack>
                    <h3 className="text-center mb-8 text-xl font-bold  lg:text-4xl lg:break-words bg-gradient-to-t from-[#54fbff] to-[#00a4c9] dark:from-[#c9fffe] dark:to-[#00cfef] bg-clip-text  text-transparent">
                        Frontend
                    </h3>
                    <ul className="grid grid-cols-3 gap-4 ">
                        {MY_STACK.frontend.map((skill) => (
                            <li
                                key={skill.name}
                                className=" rounded-2xl  group flex flex-col fle justify-center items-center"
                            >
                                <skill.icon className="size-12 mb-2" />
                                <span className=" text-sm w-full text-center">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </SetStack>
                <SetStack reverse={true}>
                    <h3 className="text-center mb-8 text-xl font-bold  lg:text-4xl lg:break-words bg-gradient-to-t from-[#94a3b8] to-[#1e293b] dark:from-[#f1f5f9] dark:to-[#64748b] bg-clip-text text-transparent">
                        Backend
                    </h3>
                    <ul className="grid grid-cols-3 gap-4 ">
                        {MY_STACK.backend.map((skill) => (
                            <li
                                key={skill.name}
                                className=" rounded-2xl  group flex flex-col fle justify-center items-center"
                            >
                                <skill.icon className="size-12 mb-2" />
                                <span className=" text-sm w-full text-center">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </SetStack>

                <SetStack>
                    <h3 className="text-center mb-8 text-xl font-bold lg:text-4xl lg:break-words bg-gradient-to-t from-[#ffb272] to-[#ee4a08] dark:from-[#ffebd4] dark:to-[#fd6412] bg-clip-text  text-transparent">
                        Learning
                    </h3>
                    <ul className="grid grid-cols-3 gap-4 ">
                        {MY_STACK.learning.map((skill) => (
                            <li
                                key={skill.name}
                                className=" rounded-2xl  group flex flex-col fle justify-center items-center"
                            >
                                <skill.icon className="size-12 mb-2" />
                                <span className=" text-sm w-full text-center">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </SetStack>
                <SetStack>
                    <h3 className="text-center mb-8 text-xl font-bold  lg:text-4xl lg:break-words bg-gradient-to-t from-[#75dbff] to-[#0072ab] dark:from-[#def3ff] dark:to-[#00a8e8] bg-clip-text  text-transparent">
                        Tools
                    </h3>
                    <ul className="grid grid-cols-3 gap-4 ">
                        {MY_STACK.tools.map((skill) => (
                            <li
                                key={skill.name}
                                className=" rounded-2xl  group flex flex-col fle justify-center items-center"
                            >
                                <skill.icon className="size-12 mb-2" />
                                <span className=" text-sm w-full text-center">{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </SetStack>
            </section>
        </Container>
    )
}
