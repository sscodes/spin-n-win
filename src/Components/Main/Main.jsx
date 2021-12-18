import { useState } from "react";
import santa from "../../assets/santa-claus-santa.gif";
import list from "../../assets/christmas-tree-christmas-trees.gif";
import gifts from "../../assets/brown-and.gif";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Main.css";
import "animate.css";

const Main = () => {
  const [gift1, setGift1] = useState("");
  const [gift2, setGift2] = useState("");
  const [gift3, setGift3] = useState("");
  const [gift4, setGift4] = useState("");
  const [gift5, setGift5] = useState("");
  const [res, setRes] = useState("");
  const [img, setImg] = useState(list);

  const arrayOfGifts = [gift1, gift2, gift3, gift4, gift5];

  const spin = (e) => {
    e.preventDefault();
    const rand_num = Math.floor(Math.random() * 4);
    setRes(arrayOfGifts[rand_num]);
    if (res) {
      setImg(santa);
      setTimeout(function () {
        setImg(gifts);
      }, 7000);
    }
  };

  return (
    <>
      <div>
        <Container>
          <Row>
            {img === santa ? null : (
              <Col>
                {img === gifts ? (
                  <div className="result">
                    <h1 className="animate__zoomInDown ani res-style mt-5">
                      Congratulations, you won a {res}!
                    </h1>
                  </div>
                ) : (
                  <Form onSubmit={spin}>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label">
                        Please Enter Gift 1
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Gift 1"
                        onChange={(e) => setGift1(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label">
                        Please Enter Gift 2
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Gift 2"
                        onChange={(e) => setGift2(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label">
                        Please Enter Gift 3
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Gift 3"
                        onChange={(e) => setGift3(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label">
                        Please Enter Gift 4
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Gift 4"
                        onChange={(e) => setGift4(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="form-label">
                        Please Enter Gift 5
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Gift 5"
                        onChange={(e) => setGift5(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="danger" type="submit" className="btn-text">
                      Try your luck!
                    </Button>
                  </Form>
                )}
              </Col>
            )}
            <Col>
              <div className="img-style">
                <img src={img} alt="" width={400} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Main;
