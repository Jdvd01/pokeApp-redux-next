// Chakra imports
import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, HStack, Image, Link, List, ListIcon, ListItem } from "@chakra-ui/react"
import InfoIcon from '@chakra-ui/icons'

// Redux imports
import { useSelector, useDispatch } from "react-redux"
import { getPokemons } from "@/redux/reducers/pokemonSlice"

import { useEffect } from "react"
import NextLink from "next/link"

const PokemonCards = () => {
    const { pokeList, isLoading, isError, message } = useSelector((state) => state.pokemon)
    const dispatch = useDispatch()

    useEffect(() => {

        // if pokeList its empty, fetch pokemons
        if(pokeList.length == 0) dispatch(getPokemons())
        
    }, [])


    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!pokeList) {
        return <p>Pokemons not found</p>
    }
    if (isError) {
        return <p>{message}</p>
    }


    return (
        <Box display={"flex"} justifyContent="center" alignItems="center" flexDirection="row" flexWrap={"wrap"} gap="3">
            {pokeList.map((pokemon) => {
                const principalType = pokemon.types[0].type.name
                const secondaryType = pokemon.types[1]?.type.name

                return (
                    <Card
                        width={["80%", "40%", "45%", "20%"]}
                        key={pokemon.id}
                        display={"flex"}
                        flexDirection="column"
                        bgColor={
                            principalType == "grass" ? "#90EE90" :
                                principalType == "fire" ? "#FFA07A" :
                                    principalType == "water" ? "#87CEEB" :
                                        principalType == "bug" ? "#3CB371" :
                                            principalType == "normal" ? "#9ACD32" : ""
                        }
                    >
                        <CardHeader
                            p={0}
                            display={"flex"}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Image

                                src={pokemon.sprites.front_default}
                                alt='pokemon sprite'
                                borderRadius='lg'
                            />
                        </CardHeader>
                        <CardBody
                            py={0}
                        >
                            <HStack spacing='3' w={"100%"} wrap="wrap">
                                <Heading size='md' _firstLetter={{ textTransform: "capitalize" }}>{pokemon.species.name}</Heading>
                                <HStack>
                                    <Badge>{principalType}</Badge>
                                    {secondaryType ? <Badge>{secondaryType}</Badge> : ""}
                                </HStack>
                            </HStack>
                        </CardBody>

                        <Divider width={"90%"} m="auto" color="gray" mt={3} />


                        <CardFooter>
                            <List spacing={3}>
                                <ListItem>
                                    <ButtonGroup w={"100%"}>
                                        <Button
                                            variant='solid'
                                            bgColor={
                                                principalType == "grass" ? "#98FB98" :
                                                    principalType == "fire" ? "#E9967A" :
                                                        principalType == "water" ? "#B0E0E6" :
                                                            principalType == "bug" ? "#2E8B57" :
                                                                principalType == "normal" ? "#F0E68C" : ""
                                            }
                                        >
                                            <ListIcon as={InfoIcon} color='green.500' />
                                            <Link as={NextLink} href={`/pokemon/${pokemon.id}`}>
                                                Learn more
                                            </Link>
                                        </Button>

                                        <Button
                                            variant='solid'
                                            _hover={{bgColor:"#FFE4B5"}}
                                            bgColor={
                                                principalType == "grass" ? "#32CD32" :
                                                    principalType == "fire" ? "#9ACD32" :
                                                        principalType == "water" ? "#FFA07A" :
                                                            principalType == "bug" ? "#FFA07A" :
                                                                principalType == "normal" ? "#3CB371" : ""
                                            }
                                        >
                                            🤍
                                        </Button>
                                    </ButtonGroup>
                                </ListItem>
                            </List>
                        </CardFooter>
                    </Card>
                )
            })}
        </Box>

    )
}

export default PokemonCards