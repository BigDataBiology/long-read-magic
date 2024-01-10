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
            <p className="white-space: pre-line font-inter gap-x-6 text-sm font-normal leading-6 text-white sm:text-[21px] md:leading-9 2xl:text-2xl ">
              SemiMAGs is an online resource for Metagenome-Assembled Genomes (MAGs) based on PacBio HiFi sequencing technology. 
We have curated samples from various sources, including the human gut, sheep gut, and seawater, which have been sequenced using PacBio HiFi technology and subsequently binned using SemiBin2. 
The website showcases the quality, genomic content, and taxonomic annotations of MAGs obtained through PacBio HiFi sequencing.  \n If you utilize our platform, please cite：
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
}) {
  const { title, description, buttonName, imageHero } =
    dataHero as AttributesProps
  const { url: urlHero, alt: altHero } = imageHero[0] as ImageProps

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

