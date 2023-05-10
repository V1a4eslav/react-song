import { Link } from 'react-router-dom';
import {SMainButton} from "../MainButton/SMainButton";
import {IMainButton} from "../MainButton/MainButton";


interface IMainLink extends IMainButton{
    to:string
}

const SMainLink = SMainButton.withComponent(Link);

export const MainLink = (props: IMainLink) => {
    return (
        <SMainLink {...props}>
            {props.children}
        </SMainLink>
    );
};