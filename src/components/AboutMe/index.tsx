import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { AboutMe as AboutMeWrapper, AboutMeTitle } from "./style";

export const AboutMe = (): JSX.Element => {
  return (
    <AboutMeWrapper id="about-me">
      <Container>
        <AboutMeTitle
          as="h2"
          type="heading2"
          color="beige1"
          css={{ marginBottom: "$3" }}
        >
          Conheça um pouco sobre{" "}
          <Text as="span" type="heading2" color="brown2">
            mim!
          </Text>
        </AboutMeTitle>
        <Text type="body1" color="beige1">
          Olá, eu sou o Mateo, tenho 19 anos e com o curso da Kenzie, será minha
          primeira formação em uma área. Desde pequeno sempre gostei de mexer no
          computador, então logo após finalizar o Ensino Médio, me interessei
          por trabalhos que envolvessem isso, e então me deparei com a
          possibilidade de ser um Dev após recomendação de conhecidos e
          encontrar o curso da Kenzie. Atualmente, estou na reta final do curso
          como programador Full Stack. Dentro da Kenzie tive diversas
          experiências nas quais simulavam o mercado de trabalho, portanto ao
          longo do curso, desenvolvi cerca de 40 projetos, entre front e back
          end, além de atividades em grupos, nas quais simulam o ambiente dentro
          de uma equipe, e ajudam também na parte das Soft Skills.
        </Text>
      </Container>
    </AboutMeWrapper>
  );
};
