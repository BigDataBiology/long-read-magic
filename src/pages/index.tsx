import React, { useEffect } from 'react'
import Head from 'next/head'
import ContactForm from '@/components/ContactForm'
import Tabs, { Tab } from '@/components/Tabs'
import Button from '@/components/Button'
import useStickyEffect, { animateOnScroll } from '@/utils/animate'
import Image from 'next/image'
import { attributes as heroAttributes } from '@/content/homePage/hero.md'
import { attributes as aboutAttributes } from '@/content/homePage/section1.md'
import { attributes as section3Attributes } from '@/content/homePage/section3.md'
import { attributes as section2Attributes } from '@/content/homePage/section2.md'
import { attributes as section4Attributes } from '@/content/homePage/section4.md'
import { attributes as formAttributes } from '@/content/homePage/contactForm.md'

import imageHero from '@/public/images/genome_image.png'
import imageAbout from '@/public/images/homepage_image_part2.png'
import imageSection2 from '@/public/images/homepage_image_part3.png'
import imageSection4 from '@/public/images/homepage_image_part4-min.png'
import logoGithub from '@/public/images/github.png'

import { AttributesProps, ItemProps, TabProps } from '@/utils/types'

const HeroComponent: React.FC<AttributesProps> = ({
  title,
  description,
  buttonName,
}) => {
  return (
    <div className="relative h-[400px] w-full sm:h-[900px]">
      <Image
        src={imageHero}
        alt="Image stem cells"
        fill
        className="object-cente bg-lightgray bg-opacity-50 object-cover"
      />
      <div
        className="h-100% absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(91deg, #001135 0%, rgba(0, 17, 53, 0.00) 100%)',
          // backdropFilter: 'blur(2px)',
        }}
      ></div>
      <div className="absolute inset-0 flex">
        <div
          className="flex flex-auto flex-col items-start justify-center pl-4 pr-4 md:pl-[54px] md:pr-[108px] lg:w-2/3 lg:pl-[108px] "
          // style={{
          //   backdropFilter: 'blur(2px)',
          // }}
        >
          <div>
            <h1 className="font-inter text-xl font-semibold capitalize text-white sm:text-4xl md:text-5xl 2xl:text-7xl">
              {title}
            </h1>
          </div>
          <div className="pb-6 pt-2 sm:pb-10 sm:pt-6 md:pb-12">
            <p className="font-inter gap-x-6 text-sm font-normal leading-6 text-white sm:text-[21px] md:leading-9 2xl:text-2xl ">
              {description}
            </p>
          </div>
          <div className="text-base 2xl:text-2xl">
            <a
              aria-label='explore more about "Genome"'
              href="#"
              className="mt-4 rounded-sm border border-white bg-transparent px-6 py-2.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              {buttonName}
            </a>
          </div>
        </div>

        <div className="w-10 flex-auto md:w-1/3"></div>
      </div>
    </div>
  )
}

export default function Home() {
  const { title, description, buttonName } = heroAttributes as AttributesProps
  const { title: titleAbout, content: descriptionAbout } =
    aboutAttributes as AttributesProps
  const { title: titleSection3, content: descriptionSection3 } =
    section3Attributes as AttributesProps
  const { title: titleSection2, description: descriptionSection2 } =
    section2Attributes as AttributesProps
  const {
    title: titleSection4,
    description: descriptionSection4,
    link,
    nameLink,
    tabs,
  } = section4Attributes as AttributesProps
  const { title: titleForm, description: descriptionForm } =
    formAttributes as AttributesProps
  // function pour soumettre le formulaire
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  // sticky effect on scroll
  const { elementWidth: width1 } = useStickyEffect('sticky1', 300)
  const { elementWidth: width2 } = useStickyEffect('sticky2', 300)
  // animate FadeIn on scroll element class fadeIn-on-scrool
  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', animateOnScroll)
      return () => {
        window.removeEventListener('scroll', animateOnScroll)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="HomePage" />
      </Head>
      <HeroComponent
        title={title}
        description={description}
        buttonName={buttonName}
      />
      <div className="max-x-[400px]:pb-1 relative grid justify-center bg-backgroundColor-grey pb-36 pt-14 md:grid-cols-2 md:pb-[112px] md:pr-[108px] md:pt-[120px]">
        <Image
          src={imageAbout}
          alt="image cells"
          className="blur-2 left-0 top-0 opacity-50 md:absolute xl:opacity-100 "
        />
        <div className="absolute top-6 mx-4 sm:top-8 md:relative md:top-0 md:top-0 md:ml-[54px] lg:ml-[108px] lg:ml-[54px]">
          <h2
            className="text-4xl font-medium text-textColor-blue lg:pl-[54px] lg:text-[52px]"
            id="sticky1"
            style={{ width: width1 }}
          >
            {titleAbout}
          </h2>
        </div>
        <div className="absolute top-28 mx-4 flex flex-col items-center items-stretch gap-6 sm:top-48 md:relative md:top-0 md:top-0 md:gap-10 xl:gap-[120px] 2xl:gap-16">
          {descriptionAbout.map((content: ItemProps, index) => (
            <div key={`${titleAbout}-${index}`} className="fadeIn-on-scrool">
              <p className=" text-base leading-6 text-textColor-blue sm:text-lg  md:leading-9 lg:text-[21px]">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex h-[420px] min-h-max w-full items-center justify-center bg-backgroundColor-blue sm:h-full">
        <div className="relative flex items-center justify-center md:px-10 2xl:px-0">
          <Image
            src={imageSection2}
            alt="Background image cells"
            sizes="100vw"
            className="backdrop-blur-[2px] backdrop-filter"
          />
          <div className="absolute mx-auto flex max-w-[80%] items-center justify-center sm:max-w-[70%]">
            <div className="rounded bg-backgroundColor-greylight p-2 text-center opacity-80 sm:px-6 sm:py-10">
              <h2 className="pb-2 text-4xl font-medium text-textColor-blue sm:pb-7 lg:text-[52px]">
                {titleSection2}
              </h2>
              <p className="leading-1 text-base text-textColor-blue sm:text-lg md:leading-9 lg:text-[21px]">
                {descriptionSection2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid bg-backgroundColor-grey pb-[93px] pt-14 md:grid-cols-2 md:pr-[108px] md:pt-[120px]">
        <div className="mx-4 pb-8 md:pl-[54px] md:pr-28 lg:pl-[108px] lg:text-[52px] 2xl:pr-10">
          <h2
            className="text-4xl font-medium text-textColor-blue lg:text-[52px]"
            id="sticky2"
            style={{ width: width2 }}
          >
            {titleSection3}
          </h2>
        </div>
        <div className="mx-4 flex flex-col items-center items-stretch md:gap-10 xl:gap-36 2xl:gap-16">
          {descriptionSection3.map((content: ItemProps, index) => (
            <div key={`${titleSection3}-${index}`} className="fadeIn-on-scrool">
              <p className="text-base leading-9 text-textColor-blue sm:text-lg lg:text-[21px]">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative px-6 pb-28 pt-20" id="sticky2-next">
        <div className="absolute inset-0">
          <Image
            src={imageSection4}
            alt="background stem cells"
            fill
            className="absolute inset-0"
          />
          <div
            className="h-100% absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(91deg, #001135 0%, rgba(0, 17, 53, 0.00) 100%)',
              backdropFilter: 'blur(2px)',
            }}
          ></div>
        </div>
        <div className="relative flex h-full flex-col gap-6 lg:pl-[54px] lg:pr-[54px]">
          <div className="md:pl-[54px]">
            <h2 className="pb-6 text-4xl font-medium text-white md:w-1/2 lg:text-[52px]">
              {titleSection4}
            </h2>
            <p className="text-base leading-9 text-white sm:text-lg md:w-1/2 lg:text-[21px]">
              {descriptionSection4}
            </p>
          </div>
          <div className="mb-4">
            <Tabs>
              {tabs.map((tab: TabProps) => (
                <Tab key={tab.name} label={tab.name}>
                  <div className="backdrop-blur-15 grid rounded bg-opacity-50 bg-gradient-4 p-6 sm:p-[54px] lg:grid-cols-2 lg:gap-[100px]">
                    <div>
                      <h2 className="text-2xl font-medium leading-9 text-textColor-blue">
                        {tab.name}
                      </h2>
                      {tab.content.map((item, index) => (
                        <div
                          key={`${tab.name}-${index}`}
                          className="pb-5 pt-6 leading-9"
                        >
                          <p className="text-lg text-textColor-blue">
                            {item.paragraph}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h2 className="text-2xl font-medium leading-9 text-textColor-blue">
                        Workflow
                      </h2>
                      {tab.workflow.map((item, index) => (
                        <div
                          key={`workflow-${index}`}
                          className="pb-5 pt-6 leading-9 text-textColor-blue"
                        >
                          <p className="text-lg">{item.paragraph}</p>
                        </div>
                      ))}
                      <Button
                        text={nameLink}
                        logo={logoGithub}
                        url={link}
                        aria-label="explore workflow"
                      />
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      <div className="bg-backgroundColor-greylight px-4 py-[90px] md:px-[54px] xl:px-[108px] ">
        <ContactForm
          title={titleForm}
          description={descriptionForm}
          onSubmit={handleSubmitForm}
        />
      </div>
    </>
  )
}

// export async function getServerSideProps(context) {
//     return {
//         redirect: {
//             destination: "/genomes",
//             permanent: false,
//         },
//     }
// }
