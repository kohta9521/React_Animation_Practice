'use client'
import { useEffect } from 'react'
import styles from './page.module.css'

// componetns
import Animation from "../components/Animation"


// aos imports
import 'aos/dist/aos.css'; // AOS CSSをインポート
import AOS from 'aos';
import AnimationLeft from '@/components/AnimationLeft';

export default function Home() {
  useEffect(() => {
    AOS.init({
      // オプション設定
      duration: 1000,
    });
  }, []);

  return (
    <main className={styles.main}>
      <Animation />
      <AnimationLeft />
      <Animation />
      <AnimationLeft />
      <Animation />
      <AnimationLeft />
      <Animation />
      <AnimationLeft />
      <Animation />
      <AnimationLeft />
      <Animation />
      <AnimationLeft />
      <Animation />
      <AnimationLeft />
      <Animation />
    </main>
  )
}
