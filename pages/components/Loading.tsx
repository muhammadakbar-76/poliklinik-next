import { NextPage } from "next";

type prop = {
    state: boolean
}

const Loading: NextPage<prop> = ({state}) => {
    return(
        <div className={`absolute top-5 left-5 z-50${!state ? " hidden" : ""}`}>
            <h1 className="text-3xl">Loading...</h1>
        </div>
    )
}

export default Loading;