import {useNavigate} from "react-router-dom";

const PathButton = ( textList: Array<string>, index: number ) => {
    const navigate: any = useNavigate()

    const PathButton: any = (ev: any) => {
        const text: string = ev.target.innerText

        textList[index] === text ? navigate(`/${text}`) : navigate('/')
    }

    return PathButton;
};

export default PathButton;