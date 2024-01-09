import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import matter from 'gray-matter'

import ContactForm from '@/components/ContactForm'
import Tabs, { Tab } from '@/components/Tabs'
import Button from '@/components/Button'

import useStickyEffect, { animateOnScroll } from '@/utils/animate'

import imageAbout from '@/public/images/homepage_image_part2.png'
import logoGithub from '@/public/images/github.png'
import logoGithubHover from '@/public/images/github_hover.png'

import { AttributesProps, ImageProps, ItemProps, TabProps } from '@/utils/types'


import { handleSubmitForm } from '../utils/form'

const HeroComponent: React.FC<AttributesProps> = ({
  title,
  description,
  buttonName,
  imageUrl,
  imageAlt,

}) => {
  return (
    <div className="relative h-[450px] w-full sm:h-[900px]">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="bg-lightgray bg-opacity-50 object-cover object-center"
      />
      <div
        className="h-100% absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(91deg, #001135 0%, rgba(0, 17, 53, 0.00) 100%)',
        }}
      ></div>
      <div className="absolute inset-0 flex">
        <div className="flex flex-auto flex-col items-start justify-center pb-4 pl-4 pr-4 pt-12 md:pl-[54px] md:pr-[108px] lg:w-2/3 lg:pl-[108px]">
          <div>
            <h1 className="font-inter text-4xl font-semibold capitalize text-white lg:text-[52px] lg:leading-[4rem] 2xl:text-7xl ">
              {title}
            </h1>
          </div>
          <div className="pb-6 pt-2 sm:pb-10 sm:pt-6 md:pb-12">
            <p className="font-inter gap-x-6 text-sm font-normal leading-6 text-white sm:text-[21px] md:leading-9 2xl:text-2xl">
              {description}
            </p>
          </div>
          <div className="text-base 2xl:text-2xl">
            <Link
              aria-label='explore more about "Genome"'
              href="/genomes"
              className="hover:shadow-buttonShadow-type3 mt-4 rounded-sm border border-white bg-transparent px-6 py-2.5 text-white hover:border-buttonColor-type3 hover:bg-white hover:text-textColor-blue"
            >
              {buttonName}
            </Link>
          </div>
        </div>
        <div className="w-10 flex-auto md:w-1/3"></div>
      </div>
    </div>
  )
}

export default function Home({
  dataHero,
  dataSection1,
  dataSection2,
  dataSection3,
  dataSection4,
}) {
  const { title, description, buttonName, imageHero } =
    dataHero as AttributesProps
  const { url: urlHero, alt: altHero } = imageHero[0] as ImageProps
  const { title: titleAbout, content: descriptionAbout } =
    dataSection1 as AttributesProps
  const { title: titleSection3, content: descriptionSection3 } =
    dataSection3 as AttributesProps
  const {
    title: titleSection2,
    description: descriptionSection2,
    illustrationImage,
  } = dataSection2 as AttributesProps

  const { url: urlImageSection2, alt: altImageSection2 } =
    illustrationImage[0] as ImageProps
  const {
    title: titleSection4,
    description: descriptionSection4,
    link,
    nameLink,
    tabs,
    illustrationImage: imageSection4,
  } = dataSection4 as AttributesProps
  const { url: urlImageSection4, alt: altImageSection4 } =
    imageSection4[0] as ImageProps
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
        imageUrl={urlHero}
        imageAlt={altHero}
      />
      <div className="bg-backgroundColor-grey">
        <div className="max-x-[400px]:pb-1 relative grid max-w-[1920px] justify-center bg-backgroundColor-grey pb-36 pt-14 md:grid-cols-2 md:pb-[112px] md:pr-[108px] md:pt-[120px] 2xl:mx-auto">
          <Image
            src={imageAbout}
            alt="image cells"
            className="blur-2 left-0 top-0 opacity-50 md:absolute xl:opacity-100 "
          />
          <div className="absolute top-6 mx-4 sm:top-8 md:relative md:top-0 md:ml-[54px] lg:ml-[108px]">
            <h2
              className="transform text-4xl font-medium text-textColor-blue duration-700 ease-in-out lg:pl-[54px] lg:text-[52px] "
              id="sticky1"
              style={{ width: width1 }}
            >
              {titleAbout}
            </h2>
          </div>
          <div className="absolute top-28 mx-4 flex flex-col items-center gap-6 sm:top-48 md:relative md:top-0 md:gap-10 xl:gap-[120px] 2xl:gap-16">
            {descriptionAbout.map((content: ItemProps, index) => (
              <div key={`${titleAbout}-${index}`} className="fadeIn-on-scrool">
                <p className=" text-base leading-6 text-textColor-blue sm:text-lg  md:leading-9 lg:text-[21px]">
                  {content.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const fileHero = fs.readFileSync(
      `${process.cwd()}/content/homePage/hero.md`
    )
    const { data: dataHero } = matter(fileHero)

    return {
      props: {
        dataHero: JSON.parse(JSON.stringify(dataHero)),
      },
    }
  } catch (error) {
    alert(error.message)
  }
  return {
    notFound: true,
  }
}

