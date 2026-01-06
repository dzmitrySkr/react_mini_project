import "./SecondatyG.css"

let SecondaryGraf = ({img = "arr.png", mainSlogan = "none", slogan = "none", button = false })=>{

    return <>
        <div className={"secondary_image"}><img src={img}/></div>
        <div className={"secondary_main_slogan"}>{mainSlogan}</div>
        <div className={"secondary_slogan"}>{slogan}</div>
        {button && <button className={"analyse_button"}> {"Analyse"} </button>}
    </>
}

export default SecondaryGraf