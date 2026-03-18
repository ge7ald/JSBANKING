'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: {amount: number}) => {
  return (
    <div className='ont-bold'>
      <CountUp
        decimal=","
        prefix='₦'
        decimals={2}
        end={amount}
      />
    </div>
  )
}

export default AnimatedCounter