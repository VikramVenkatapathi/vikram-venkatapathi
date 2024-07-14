import aws_ccp from "./images/AWS CCP badge.png";
import aws_saa from "./images/AWS SAA badge.png";
import oci_ca from "./images/OCI_F2023_CA.png"
import tf_associate from "./images/TF-Accociate badge.png";
import Button from "@material-ui/core/Button";
import publication_logo from "./images/publication_logo.png";
import Card from "react-bootstrap/Card";
import '../assets/css/achievements.css'; // Import CSS file for custom styles

const Achievements = () => {
    const items = [
        {
            img: aws_saa,
            cardTitle: "AWS Certified Solutions Architect Associate ",
            cardText: "Expected certification date <br/> July 21, 2024 ",
            btnText: "In progress..",
            // btnUrl: "https://journal.gnest.org/publication/gnest_05492",
        },
        {
            img: oci_ca,
            cardTitle: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
            cardText: "Issued on: <br/> July 13, 2024 ",
            btnText: "See Credential",
            btnUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C8657ADE5B1C67375D049E0C309520C3C59EA5295DC8E9451FB3C5670383EAEC",
        },
        {
            img: tf_associate,
            cardTitle: "HashiCorp Certified: Terraform Associate (003)",
            cardText: "Issued on: <br/> April 10, 2024 ",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/4ec31986-6dc0-404f-a128-f001cb2bb48f",
        },
        {
            img: aws_ccp,
            cardTitle: "AWS Certified Cloud Practitioner",
            cardText: "Issued on: <br/> August 30, 2023 ",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/acdf0979-eb16-444c-b388-497efa036e59",
        },
        {
            img: publication_logo,
            cardTitle: "Water Quality Prediction using Statistical, Ensemble and Hybrid models",
            cardText: "Date paper accepted: <br/> February 02, 2024 ",
            btnText: "See Publication",
            btnUrl: "https://journal.gnest.org/publication/gnest_05492",
        }
    ];
    return (
        <section id="achievements" className="about background-alt">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Achievements</h2>
                </div>
                <div className="row">
                    {items.map((data, i) => (
                        <div
                            className="col-md-4 col-sm-6 col-xs-12 cardMargin" // Adjust column size for responsiveness
                            key={i}
                        >
                            <Card
                                style={{
                                    width: "14rem", // Adjust width to make smaller cards
                                    background: "#9FD1C8",
                                    padding: "15px",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add a subtle shadow for depth
                                }}
                                className="text-center"
                            >
                                <Card.Img
                                    variant="top"
                                    src={data.img}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        marginBottom: "10px",
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(0,0,0)",
                                            fontSize: "16px",
                                            marginBottom: "10px",
                                            overflowWrap: "break-word",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <Card.Text
                                        style={{
                                            color: "#7e8890",
                                            fontSize: "14px",
                                        }}
                                    >
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                            style={{ marginTop: "10px" }}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
