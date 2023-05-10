import {IBurger} from "./IBurger";
import {useCallback} from "react";
import {BurgerIcon} from "./SBurger";

export const Burger = ({setMenuActive, menuActive}: IBurger) => {

    const burgerHandler = useCallback(() => {
        setMenuActive(prevState => !prevState);
    }, [setMenuActive]);

    return (
        <BurgerIcon onClick={burgerHandler}
                    className={menuActive ? 'active' : ''}>
            <span></span>
        </BurgerIcon>
    );
};
