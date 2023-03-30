import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getSinglePokemon } from "../../../redux/reducers/pokemonSlice";


export default function SinglePokemon() {
    const { query } = useRouter()
    const dispatch = useDispatch()

    const { pokeList, singlePokemon } = useSelector((state) => state.pokemon)

    const [pokemon, setPokemon] = useState({})

    const findPokemon = (id) => {

        // if PokeList its empty, return undefined
        if(pokeList == null || pokeList.length > 0) return undefined

        // if pokeList have pokemons, find the chosen one
        const newPokemon = pokeList.find((pokemon) => pokemon.id == id)
        return newPokemon
    }

    useEffect(() => {

        let detailsPokemon = findPokemon(query.id)
        
        if (detailsPokemon == undefined) {
            detailsPokemon = dispatch(getSinglePokemon(query.id))
        }
        
        setPokemon(detailsPokemon)

        // useEffect depends for id, to change view between pokemons
    }, [query.id])

    return (
        <Box display={"flex"} justifyContent="center" alignItems="center" flexDirection="row" flexWrap={"wrap"} gap="3">
            {!pokemon ? (
                <Text>Loading...</Text>
            ) : (

                <Card
                    width={["80%", "70%", "45%", "40%"]}
                    key={singlePokemon.id}
                    display={"flex"}
                    flexDirection="column"
                    bgColor={"#FFF0F5"}
                    boxShadow="2xl"
                    p={8}
                >
                    <CardHeader
                        p={0}
                        display={"flex"}
                        justifyContent="center"
                        alignItems="center"
                        flexWrap={"wrap"}
                        gap={8}
                    >
                        <Heading w={"100%"} size='md' _firstLetter={{ textTransform: "capitalize" }}>{singlePokemon.species?.name}</Heading>

                        <Flex flexDir={"column"} justify="center" align={"center"} >
                            <Text _firstLetter={{ textTransform: "capitalize" }} fontWeight="bolder" >
                                default
                            </Text>
                            <Box>
                                {/* Front default */}
                                <Image
                                    src={singlePokemon.sprites?.front_default}
                                    alt='pokemon sprite'
                                    borderRadius='lg'
                                />

                                {/* Back default */}
                                <Image
                                    src={singlePokemon.sprites?.back_default}
                                    alt='pokemon sprite'
                                    borderRadius='lg'
                                />
                            </Box>
                        </Flex>

                        <Flex flexDir={"column"} justify="center" align={"center"} >
                            <Text _firstLetter={{ textTransform: "capitalize" }} fontWeight="bolder">
                                shiny
                            </Text>
                            <Box>
                                {/* Front shiny */}
                                <Image
                                    src={singlePokemon.sprites?.front_shiny}
                                    alt='pokemon sprite'
                                    borderRadius='lg'
                                />

                                {/* Back shiny */}
                                <Image
                                    src={singlePokemon.sprites?.back_shiny}
                                    alt='pokemon sprite'
                                    borderRadius='lg'
                                />
                            </Box>
                        </Flex>
                    </CardHeader>

                    <CardBody
                        py={0}
                    >
                        <VStack w={"100%"} wrap="wrap" align={"start"} justify="start" >
                            <HStack>
                                {singlePokemon.types?.map(type => <Badge key={type.slot}>{type.type.name}</Badge>)}
                            </HStack>
                            <HStack>
                                <Badge>Weight: {singlePokemon.weight}</Badge>
                                <Badge>Height: {singlePokemon.height}</Badge>
                            </HStack>
                        </VStack>
                    </CardBody>

                    <Divider width={"90%"} m="auto" color="gray" mt={3} />


                    <CardFooter>
                        <ButtonGroup w={"100%"}>
                            <Button
                                width={"100%"}
                                variant='solid'
                                _hover={{ bgColor: "#778899" }}
                                bgColor={"#C0C0C0"}
                            >
                                <Text>🤍</Text>
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            )}
        </Box>
    )
}
