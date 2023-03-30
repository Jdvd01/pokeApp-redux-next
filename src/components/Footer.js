import { Box, Divider, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            w={"100%"}
            position="fixed"
            bottom={0}
            py={3}
            bgColor="#FFE4B5"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDir="column"
            gap={1}
        >
            <Text color={"#000000"} textAlign="center" px={5} >
                Made for <a className="footer-anchor" href="https://github.com/Jdvd01" target={"_blank"}>José Velásquez</a>, with <a className="footer-anchor" href='https://nextjs.org/docs' target={"_blank"}>NextJS</a>, <a className="footer-anchor" href='https://es.redux.js.org/' target={"_blank"}>Redux</a> and <a className="footer-anchor" href='https://chakra-ui.com/' target={"_blank"}>ChakraUI</a>
            </Text>

            <Box
                fontSize={"1.5rem"}
                display="flex"
                gap={5}
            >
                <a href="https://github.com/Jdvd01" target={"_blank"} className="icon-anchor">
                    <Text
                        _hover={{
                            transform: "scale(1.2)",
                            color: "#370080"
                        }}
                        className="fa-brands fa-github  col-1"
                    >
                    </Text>
                </a>
                <a href="https://instagram.com/josevelasquez010" target={"_blank"} className="icon-anchor">
                    <Text
                        _hover={{
                            transform: "scale(1.2)",
                            color: "#370080"
                        }}
                        className="fa-brands fa-instagram  col-1"
                    >
                    </Text>
                </a>
                <a href="https://www.linkedin.com/in/jdvd01/" target={"_blank"} className="icon-anchor">
                    <Text
                        _hover={{
                            transform: "scale(1.2)",
                            color: "#370080"
                        }}
                        className="fa-brands fa-linkedin-in  col-1"
                    >
                    </Text>
                </a>
                <a href="mailto:velasquezdenorajose@gmail.com" target={"_blank"} className="icon-anchor">
                    <Text
                        _hover={{
                            transform: "scale(1.2)",
                            color: "#370080"
                        }}
                        className="fa-regular fa-envelope col-1"
                    >
                    </Text>
                </a>
            </Box>
        </Box>
    )
}
