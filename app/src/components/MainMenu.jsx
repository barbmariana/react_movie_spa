import MainMenuContainer from "../styles/MainMenuContainer";
import {Link} from 'react-router-dom';

const  MainMenu = () => 
{
        return(
                <MainMenuContainer>
                        <ul>
                                <li><Link to='/'>Now Playing</Link></li>
                                <li><Link to='/nextrelease'>Upcoming</Link></li>
                        </ul>
                </MainMenuContainer>
        )
}

export default MainMenu;