import { CERTIFICATE } from "../constants"
import Technologies from "./Technologies"

export const Certificate = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Certificate</h2>
        <div>
            {CERTIFICATE.map((certificate, index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img src={certificate.image} 
                        width={250}
                        height={250}
                        alt={certificate.title}
                        className="mb-6 rounded" />
                    </div>
                 <div className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">{certificate.title}</h3>
                    <p className="mb-4 text-stone-400">{certificate.description}</p>
                    <p className="mb-2 text-sm text-stone-400">
                        {certificate.year}
                    </p>
                 </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Certificate