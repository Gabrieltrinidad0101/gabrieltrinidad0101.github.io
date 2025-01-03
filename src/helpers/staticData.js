import GitHubIcon from '@/components/icons/GitHub'
import AwsIcon from '@/components/icons/stack/Aws'
import KubernetesIcon from '@/components/icons/stack/Kubernetes'
import CSSIcon from '@/components/icons/stack/CSS'
import GolangIcon from '@/components/icons/stack/Go'
import CicdIcon from '@/components/icons/stack/Cicd'
import GitlabIcon from '@/components/icons/stack/Gitlab'
import DockerIcon from '@/components/icons/stack/Docker'
import ExpressIcon from '@/components/icons/stack/Express'
import GitIcon from '@/components/icons/stack/Git'
import HtmlIcon from '@/components/icons/stack/Html'
import JavaScriptIcon from '@/components/icons/stack/JavaScript'
import MongoDBIcon from '@/components/icons/stack/MongoDB'
import MySQLIcon from '@/components/icons/stack/MySQL'
import NginxIcon from '@/components/icons/stack/Nginx'
import NodeJSIcon from '@/components/icons/stack/NodeJS'
import ReactJSIcon from '@/components/icons/stack/ReactJS'
import BazelIcon from '@/components/icons/stack/Bazel'
import TypeScriptIcon from '@/components/icons/stack/TypeScript'
import FlutterIcon from '@/components/icons/stack/Flutter'

export const experienceInfo = [
    {
        role: 'FullStack Programmer',
        date: '2023 - CURRENT',
        company: 'ETHICS CODE',
        description: 'Developing solutions using Go, Microservices,Quasar, Node.js, MongoDB, MySQL, Vue and React. Additionally, I implement good practices in testing and CI/CD.',
    },
    {
        role: 'FullStack Programmer',
        date: '2021 - 2023',
        company: 'Sistecsoft',
        description:
            `Developing billing systems aimed at internet distribution companies, using C#, JavaScript, MySQL, jQuery, Xamarin, Web Forms and .NET.
            <br/>
            <br/>
            Developing billing systems in Python, using Flask, HTML, CSS, JavaScript, MySQL, Java and Kivy for the mobile application.`,
    }
]

export const MY_STACK = {
    frontend: [
        { name: 'HTML', icon: HtmlIcon },
        { name: 'CSS', icon: CSSIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'React', icon: ReactJSIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'Flutter', icon: FlutterIcon },
    ],
    backend: [
        { name: 'NodeJS', icon: NodeJSIcon },
        { name: 'ExpressJS', icon: ExpressIcon },
        { name: 'MySQL', icon: MySQLIcon },
        { name: 'MongoDB', icon: MongoDBIcon },
        { name: 'Nginx', icon: NginxIcon },
        { name: 'Go', icon: GolangIcon },
    ],
    learning: [
        { name: 'Kubernetes', icon: KubernetesIcon },
        { name: 'Bazel', icon: BazelIcon },
    ],
    tools: [
        { name: 'AWS', icon: AwsIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'GitLab', icon: GitlabIcon },
        { name: 'CI/CD', icon: CicdIcon },
    ],
}