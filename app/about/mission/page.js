import Button from '@/app/components/Button';
import Image from 'next/image';
import React from 'react'
import missionImage from '@/public/images/mission-img.jpg';

function Mission() {
  return (
    <main className='mt-10'>
      <div>Mission Dutch-Bangla Bank engineers enterprise and creativity in business and industry with a commitment to social responsibility. &quot;Profits alone&quot; do not hold a central focus in the Bank&apos;s operation; because &quot;man does not live by bread and butter alone&quot;.</div>

      <div className='w-[400px] border-1 mt-5'>
        <Image src={missionImage} alt='Mission Image' placeholder='blur' />
      </div>
      <Button />
    </main>
  )
}

export default Mission;