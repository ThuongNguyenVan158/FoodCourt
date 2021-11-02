import React from "react";
<<<<<<< HEAD

export default function HomePage() {
  return <div>Home</div>;
=======
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import Container from "@mui/material/Container";
import Banner1 from "../../../assets/banner1.png";
import FoodList from "../../../components/FoodList";
export default function HomePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ backgroundColor: "#faf7f2" }}>
      <Container className="mt-5 mb-5">
        <div style={{ position: "relative" }}>
          <img className="w-100" src={Banner1} alt="banner1" />
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "5%",
            }}
          >
            <h4
              style={{
                fontSize: 56,
                fontWeight: 400,
                fontFamily: "Satisfy",
              }}
            >
              Double Cheese
            </h4>
            <h1
              style={{
                fontSize: 80,
                fontWeight: 900,
                color: "#ce2829",
                lineHeight: "120px",
              }}
            >
              BURGER{" "}
            </h1>
            <p style={{ fontSize: 18, lineHeight: "33px", maxWidth: "100%" }}>
              With Free Cocacola. Stay home , we deliver
            </p>
          </div>
        </div>
        <Box sx={{ width: "100%", bgcolor: "#6a19eb", borderRadius: "px" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab style={{ fontSize: 18, fontWeight: "bold" }} label="Pizza" />
            <Tab
              style={{ fontSize: 18, fontWeight: "bold" }}
              label="Hamboger"
            />
            <Tab style={{ fontSize: 18, fontWeight: "bold" }} label="Hot dog" />
            <Tab style={{ fontSize: 18, fontWeight: "bold" }} label="Kamen" />
            <Tab
              style={{ fontSize: 18, fontWeight: "bold" }}
              label="Fast Food"
            />
            <Tab
              style={{ fontSize: 18, fontWeight: "bold" }}
              label="Soft Drink"
            />
            <Tab
              style={{ fontSize: 18, fontWeight: "bold" }}
              label="Nice box"
            />
          </Tabs>
        </Box>
        <FoodList />
      </Container>
    </div>
  );
>>>>>>> nhat
}
