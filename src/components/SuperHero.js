
import {Card, Col, Container, Row,Image } from "react-bootstrap"

const SuperHero = () => {
    return (
        <div>
            <Container>
              <br />
              <h1 className="text-white">SuperHero Movies</h1>
              <br />
                <Row>
                    <Col md={4} className="movieWrapper"  id="superhero">
                    <Card className="movieImage">
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/superhero/antman.jpg?raw=true" alt="Dune Movies"   className="images"/>
                      <div className="bg-dark">
                      <div className="p-2 m-1 text-white">

                       <Card.Title className="text-center">Dune</Card.Title>
                        <Card.Text className="text-left">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/superhero/avenger.jpg?raw=true" alt="Dune Movies"  className="images" />
                      <div className="bg-dark">
                      <div className="p-2 m-1 text-white">

                       <Card.Title className="text-center">Dune</Card.Title>
                        <Card.Text className="text-left">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/superhero/batman.jpg?raw=true" alt="Dune Movies"  className="images" />
                      <div className="bg-dark">
                      <div className="p-2 m-1 text-white">

                       <Card.Title className="text-center">Dune</Card.Title>
                        <Card.Text className="text-left">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/superhero/robinhood.jpg?raw=true" alt="Dune Movies"  className="images" />
                      <div className="bg-dark">
                      <div className="p-2 m-1 text-white">

                       <Card.Title className="text-center">Dune</Card.Title>
                        <Card.Text className="text-left">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/superhero/spiderman-cover.jpg?raw=true" alt="Dune Movies"  className="images" />
                      <div className="bg-dark">
                      <div className="p-2 m-1 text-white">

                       <Card.Title className="text-center">Dune</Card.Title>
                        <Card.Text className="text-left">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/superhero/superman.jpg?raw=true" alt="Dune Movies" className="images" />
                      <div className="bg-dark">
                      <div className="p-2 m-1 text-white">

                       <Card.Title className="text-center">Dune</Card.Title>
                        <Card.Text className="text-left">
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content.
                        </Card.Text>
                        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
  
          </div>
            )
    }

export default SuperHero