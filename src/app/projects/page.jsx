import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'netflix',
    description:
      '#React18, React Redux 실습',
    link: { href: '#', label: '#React18 #React Redux' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Apple website',
    description:
      '#HTML #CSS #JS 실습 개인 공부하면서 만들었습니다.',
    link: { href: 'https://flourishing-crostata-0562e5.netlify.app', label: 'appleSite' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Ai seminar 소개 페이지',
    description:
      '회사에서 AI seminar 했는데 소개 페이지 만들었습니다. #HTML #SCSS #JS #ASP',
    link: { href: 'https://astounding-kitten-ae54a2.netlify.app', label: 'AI seminar' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Starbucks site 반응형 없음, 개인 공부 JSAP',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: 'https://deluxe-crisp-730bb1.netlify.app', label: 'Starbucks' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Hotel web site',
    description:'기획, 디자인부터 프론트엔드 부분까지 개발 JSP 를 활용하여 서버단과 주고받은 데이터 조작',
    link: { href: 'https://beaka0717.github.io/gobi-caranserai/', label: 'Hotel web site' },
    logo: logoOpenShuttle,
  },
  {
    name: 'H&M site',
    description:
      'React 공부 api 실습',
    link: { href: 'https://rad-sawine-3fede1.netlify.app', label: 'H&M site' },
    logo: logoOpenShuttle,
  },
  {
    name: 'React microsite',
    description:
      '회사에서 microsite 필요해서 만들었습니다. #react18 #tailwind',
    link: { href: 'https://lighthearted-sundae-091aad.netlify.app', label: 'React microsite' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Quiz page',
    description:
      '회사에서 광고로 Quiz page 필요했습니다.',
    link: { href: 'https://genuine-marigold-aa4b7f.netlify.app', label: 'Quiz page' },
    logo: logoOpenShuttle,
  },
  {
    name: 'JS Game',
    description:
      'js 실습 game.',
    link: { href: 'https://beaka0717.github.io/dice-game/', label: 'JS Game' },
    logo: logoOpenShuttle,
  },
  {
    name: '가계부',
    description:
      'js 실습 가계부.',
    link: { href: 'https://dynamic-taffy-9784e6.netlify.app', label: '가계부' },
    logo: logoOpenShuttle,
  },
  {
    name: 'Glow up',
    description:
      '#css 실습 main page만 성형외과의 리뷰를 올리고, 병원에서는 광고를 올릴 수 있는 사이트, 기획, 디자인 및 퍼블리싱',
    link: { href: 'https://beaka0717.github.io/glowUp/', label: '성영수술 리뷰 사이트' },
    logo: logoOpenShuttle,
  },
  {
    name: '서원인텍',
    description:
      'Publishing, 영문 페이지 번역',
    link: { href: 'http://www.seowonintech.co.kr/kor/main#s1', label: '서원인텍' },
    logo: logoOpenShuttle,
  },
  {
    name: '도원아이앤씨',
    description:
      'Publishing',
    link: { href: 'http://211.251.237.36:8097/main', label: '도원아이앤씨' },
    logo: logoOpenShuttle,
  },


]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'You must do the things you think you cannot do.” ― Eleanor Roosevelt',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="You must do the things you think you cannot do.” ― Eleanor Roosevelt"
      intro="그 동안 제가 해온 포로젝트입니다. 기준 회사에서 문제가 될만한 것은 올리지 못했습니다."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
