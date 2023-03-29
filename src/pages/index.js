import Head from 'next/head'
import { Inter } from 'next/font/google'
import PokemonCards from '@/components/PokemonCards'
import { Box } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <Box bg={"#FFE4B5"} minHeight="100vh" py={8} w="100%">
            <PokemonCards />
        </Box>
    )
}
