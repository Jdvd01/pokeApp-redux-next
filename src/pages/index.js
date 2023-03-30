import { Inter } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <Box bg={"#FFE4B5"} minHeight="100vh" p={8} w="100%">
            Landing
            <Link href="/pokemon">Pokemon list</Link>
        </Box>
    )
}
