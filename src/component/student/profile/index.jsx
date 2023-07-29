import { useEffect, useState } from "react"
import { Wrapper } from "./style"
import { services } from "../../../services"

export const Profile = ({ loggedInUser }) => {

    const [certificates, setCertificates] = useState({})

    useEffect(() => {
        services.getCertificates(loggedInUser.authenticationToken)
        .then(({data}) => {
            setCertificates(data)
        })
        .catch(console.log)
    }, [])

    return (
        <Wrapper>
            <div className="inner">
                <h1>{loggedInUser.name}</h1>
                {
                    Object.keys(certificates).map(certificateKey => (
                        <div className="certificate" key={certificateKey}>
                            <img src="https://cdn-icons-png.flaticon.com/512/199/199325.png" alt="certificate" />
                            <div className="right">
                                <h1>{certificateKey.split(':')[1]}</h1>
                                <p>
                                    Score : {certificates[certificateKey].om + '/' + certificates[certificateKey].mm}
                                </p>
                            </div>
                            <input type="button" value="Download" />
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}