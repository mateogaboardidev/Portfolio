import { styled } from "@/styles/stitches.config";
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const AboutMe = styled("div", {
  backgroundColor: "$blue2",
  borderBottom: "2px solid $beige1",
  padding: "7rem 0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 8rem",
  "& a": {
    margin: "0 !important",
  },
  "@tablet": {
    backgroundPosition: "center top 1rem",
  },
  [`& ${Container}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    "@mobile": {
      flexDirection: "column",
      [`& ${Flex}:first-child`]: {
        marginBottom: "$5",
        flexDirection: "column",
        textAlign: "center",
        [`& img`]: {
          marginBottom: "$2",
        },
      },
    },
  },
});

export const AboutMeTitle = styled(Text, {});
