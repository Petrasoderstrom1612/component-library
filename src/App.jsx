import Badge from "./Badges/Badge";
import Banner from "./Banners.jsx/Banner";
import Card from "./Cards.jsx/Card";
import Testimonial from "./Testimonials.jsx/Testimonial";
import TestimonialWithImage from "./Testimonials.jsx/TestimonialWithImage";
import Tooltip from "./Tooltips/Tooltip.jsx";
import {CloudUpload, Trashbin, PalmTree, Garrage} from "./assets/icons"
import {Person, Person2} from "./Testimonials.jsx/photos/index.jsx"

function App() {
  const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple"];
  const palettes = ["blackish", "blueish", "magentaish", "greenish"]

  return (
    <>
      <>
        <h1 className="h1-badges">Badges</h1>
        <div className="all-badges">
          <div>
            <h2 className="h2-badge">Square</h2>
            <h2 className="h2-badge">Pill</h2>
          </div>
          {colors.map((one, index) => (
            <div key={`${one}-${index}`} className="badges-div">
              <Badge variant="squared" color={one}>{one}</Badge>
              <Badge variant="rounded" color={one}>{colors[index].toUpperCase()}</Badge>
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
        <Card icon={<CloudUpload className="card-icon"/>} style={{ cursor: "pointer" }}>
          <h3 className="h3-card">Easy Deployment</h3>
          <p className="p-card">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lorem </p>
        </Card>
        <Card iconCardColor="icon-card-orange">
          <h3 className="h3-card">Fast Download</h3> {/* scenario with no icon provided */}
          <p className="p-card">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis</p>
        </Card>
        <Card icon={<Trashbin className="card-icon"/>}  iconCardColor="icon-card-red" style={{ cursor: "pointer" }}>
          <h3 className="h3-card">Smooth Delete</h3> {/* scenario with no icon provided */}
          <p className="p-card">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit lorem ipsum dolor sit amet</p>
        </Card>
        </div>
      </>
      <br />
      <hr/>

      <>
        <h1 className="h1-testimonial">Testimonials</h1>
        <Testimonial
          icon={<PalmTree />}
          icon2={<Garrage />}
          title="Workcation"
          mainText="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
          footer="May Andersons / Workcation, CTO"/>
        <br />
        <Testimonial
          icon={<PalmTree />}
          icon2={<Garrage />}
          title="Staycation"
          mainText="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”"
          footer="Helena Loveless" 
        />    {/* scenario with no slash */}
        <br />
        <TestimonialWithImage
          photo={Person}
          mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          footer="Rudy Candeleight" 
          footerProfession="Workcation, CTO" 
        />    
        <br />
        <TestimonialWithImage
          photo={Person2}
          mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
          footer="Maria Garcia" 
          footerProfession="Staycation, CEO" 
        />    
      </>

      <>
        <h1 className="h1-tooltips">Tooltip</h1>
        { palettes.map((onePalette, index) => (
          <div key={`${onePalette}-${index}`} className="tooltip-divs">
          <Tooltip 
            theme="dark"
            palette ={onePalette}
            title="Archive notes"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            />
            <Tooltip 
            theme="light"
            palette={onePalette}
            title="Archive notes"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            />
          </div>
        ))
        }
      </>
    </>
  );
}

export default App;
