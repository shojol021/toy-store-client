import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - RoboPlay`;
    }, [title])
}

export default useTitle