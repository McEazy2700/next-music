import Head from 'next/head'
import Image from 'next/image'
import NavGroup from '../components/atoms/a-navigation/NavGroup'
import NavItem from '../components/atoms/a-navigation/NavItem'
import styles from '../styles/Home.module.css'
import SearchSmall from '../components/atoms/a-search/SearchSmall'
import {FiCodepen,  FiHeadphones,
  FiInstagram, FiLinkedin, FiTwitch, FiTwitter} from 'react-icons/fi'
import { MdVideoLibrary } from 'react-icons/md'
import VerticalNavBar from '../components/compounds/c-navigation/VerticalNavBar'
import { useVisualContext } from '../context/VisualContext'
import DropDown from '../components/molecules/m-dropdown/DropDown'

const code = <NavItem icon={<FiCodepen />} text={'Code'}/>
const music = <NavItem icon={<FiHeadphones />} text={'Music'}/>
const videos = <NavItem icon={<MdVideoLibrary />} text={'Video'}/>
const insta = <NavItem icon={<FiInstagram />} text={'Instagram'}/>
const linked = <NavItem icon={<FiLinkedin />} text={'LinkedIn'} />
const twitch = <NavItem icon={<FiTwitch />} text={'Twitch'} />
const tweet = <NavItem icon={<FiTwitter />} text={'Twitter'} />

const categories = [code, music, videos]
const social = [insta, linked, twitch, tweet]

const categoryGroup = <NavGroup navItems={categories} name={'Categories'}/>
const socialGroup = <NavGroup navItems={social} name={'Social'} />
const search = <SearchSmall />

const navItems = [search, categoryGroup, socialGroup]

export default function Home() {
  const ctx = useVisualContext()
  return (
    <div className={`${styles.container} ${ctx.appMode}`}>
      <Head>
        <title>Tripple Music</title>
        <meta name="description" content="Get and vibe to original 9ja beats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <VerticalNavBar items={navItems}/>
        <DropDown />
      </main>

    </div>
  )
}
