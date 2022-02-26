import { Button } from "@chakra-ui/react"
import Link from "next/link"
import { CardBody, CardDescription, CardFooter, CardMain, CardTitle } from "../styles/CardStyled"

const Card = ({title, description, redirectTo}) => {
    return (
        <CardMain>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardBody>
            <CardFooter>
                <Link href={redirectTo || ""}>
                    <Button fontWeight={400} colorScheme="blue" >Selecionar</Button>
                </Link>
            </CardFooter>
        </CardMain>
    )
}


export default Card