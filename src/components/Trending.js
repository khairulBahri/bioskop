
import {Card, Col, Container, Row,Image } from "react-bootstrap"

const Trending = () => {
    return (
        <div>
            <Container>
              <br />
              <h1 className="text-white">Tranding Movies</h1>
              <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                    <Card className="movieImage">
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/dune.jpg?raw=true" alt="Dune Movies"   className="images"/>
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
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/everything.jpg?raw=true" alt="Dune Movies"  className="images" />
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
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/infinite.jpg?raw=true" alt="Dune Movies"  className="images" />
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
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/joker.jpg?raw=true" alt="Dune Movies"  className="images" />
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
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/lightyear.jpg?raw=true" alt="Dune Movies"  className="images" />
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
                      <Image src="https://github.com/deaaprizal/rdeafilms-react-js-basic/blob/part1/basic/src/assets/images/trending/morbius.jpg?raw=true" alt="Dune Movies" className="images" />
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

export default Trending