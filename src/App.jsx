import { useState } from "react";
import Badge from "./Badges/Badge";
import Banner from "./Banners.jsx/Banner";
import Card from "./Cards.jsx/Card";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { RiDeleteBin7Line } from "react-icons/ri";

function App() {
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple"];

  return (
    <>
      <>
        <h1 className="h1-badges">Badges</h1>
        <div className="all-badges">
          <div>
            <h2 className="h2-badge">Square</h2>
            <h2 className="h2-badge">Pill</h2>
          </div>
          {colors.map((one) => (
            <div className="badges-div">
              <Badge variant="squared" color={one}>Badge</Badge>
              <Badge variant="rounded" color={one}>Badge</Badge>
            </div>
          ))}
        </div>
        <hr/>
      </>

      <>
      <h1 className="h1-banners">Banner</h1>
          <Banner status="success" title="Congratulations!" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
          <br />
          <Banner status="warning" title="Attention"/>
          <br />
          <Banner status="error" title="There is a problem with your application" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."/>
          <br />
          <Banner status="neutral" title="Update available"/>
      <br />
      <hr/>
      </>

      <>
          <h1 className="h1-card">Card</h1>
          <div className="cards-flex-div">
          <Card icon={<HiOutlineCloudUpload className="card-icon"/>}>
            <h3 className="h3-card">Easy Deployment</h3>
            <p className="p-card">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lorem </p>
          </Card>
          <Card iconCardColor="icon-card-orange">
            <h3 className="h3-card">Fast Download</h3> {/* scenario with no icon provided */}
            <p className="p-card">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis</p>
          </Card>
          <Card icon={<RiDeleteBin7Line className="card-icon"/>}  iconCardColor="icon-card-red" style={{ cursor: "pointer" }}>
            <h3 className="h3-card">Smooth Delete</h3> {/* scenario with no icon provided */}
            <p className="p-card">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit lorem ipsum dolor sit amet</p>
          </Card>
          </div>
      </>
      <br />
      <hr/>
    </>
  );
}

export default App;
