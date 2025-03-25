import React from 'react'
import MyCard from '@/components/MyCard'
function Home() {
    const games = [
        {
            name : "Coin Flip",
            description : "Flip the coin and win the game",
            page : "/coinflip",
        }
    ]

  return (
    <div className='min-h-screen bg-gray-500 ' >
        <div className='text-4xl text-center text-white pt-20 font-bold'>
        "Every Gambler is one step away from being a millionaire"
        </div>
        <div className='flex justify-center my-14' >
            {
                games.map((game) => (
                    <MyCard gameName={game.name} gameDescription={game.description} gamePage={game.page} />
                ))
            }
        </div>
    </div>
  )
}

export default Home