import styled from'./footer.module.css'

function Footer(props){
    return(
        <div className={styled.footer}>
            <div className={styled.footerTitle}>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default Footer;