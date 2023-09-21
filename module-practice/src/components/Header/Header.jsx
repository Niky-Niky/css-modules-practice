import HeaderCSS from "../Header/Header.module.css"

const Header = () => {
    return(
        <div className = {HeaderCSS.container}>
            <p className = {HeaderCSS.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ea quia magni obcaecati necessitatibus in.</p>
            <button className = {HeaderCSS.btn}>Buy it!</button>
        </div>
    );
};
export default Header;