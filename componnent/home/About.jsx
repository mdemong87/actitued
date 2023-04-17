import Image from "next/image"
import { Container } from "react-bootstrap"
import about from "../../public/about.png"

export default function Abour() {
    return (
        <Container>
            <div className={`row mt-5 mb-5`}>
                <div className="col-sm-12 col-md-6">
                    <Image className={`w-100 h-100`} src={about}></Image>
                </div>
                <div className="col-sm-12 col-md-6 pt-5">
                    <h4>about</h4>
                    <h1>actitude</h1>

                    <div>
                        <p className={`text-muted`}>We volunteers and organizations to their
                            purpose by they find most important in
                            creating a better world.
                        </p>
                        <p className={`text-muted`}>
                            Help corporations implement impactful and
                            engaging corporate volunteer programs Help
                            individuals uncover their cause passions and
                            engage their skills and time in helping
                        </p>
                        <p className={`text-muted`}>
                            By collaborating with corporations, individuals
                            and non-profits we aim to provide all
                            stakeholders a joined platform for doing good
                            in the world
                        </p>
                        <p className={`text-muted`}>
                            We help connect those with the desire to do
                            good with the knowledge, community,
                            inspiration, and support that will allow them to
                            achieve their full potential and live a life of
                            purpose.
                        </p>

                        <div className={`d-flex gap-2`}>
                            <h5>Actitude</h5>
                            <p className={`text-muted`}>helps making that happen.</p>
                        </div>

                        <button className={`readMorebtn mt-3`}>Read More</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
