import { Box, Heading } from "@chakra-ui/react";
import Article from "./Article.tsx";

const articles: number[] = new Array(7).fill(0);

const Articles = () => {

	return (
		<Box mt="64px">
			<Heading size="md" pb="8px" m="16px 0" textAlign="left" borderBottom="solid 1px white">
				Articles
			</Heading>
			<Box >
				{articles.map((el, i) => {
					return (
						<Box m="40px 0" key={i}>
							<Article />
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export default Articles;
