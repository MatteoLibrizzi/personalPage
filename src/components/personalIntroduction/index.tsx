import { Box, Card, CardContent, Typography } from "@mui/material";
import "./styles.css";

export const PersonalIntroduction = () => {
  return (
    <Card sx={{ bgcolor: "secondary.light", margin: "1vh" }} variant="outlined">
      <CardContent>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          paddingTop={2}
        >
          <Typography variant="h4" fontWeight={"bold"}>
            Matteo Librizzi
          </Typography>
          <Typography>
            My name is Matteo. I'm 22 years old and I'm currently living in
            Gent, Belgium.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
