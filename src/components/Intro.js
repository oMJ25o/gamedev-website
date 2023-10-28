import profilePic from "./images/profilepic.png";

function IntroSection() {
    return (
        <div className="container-intro">
            <img src={profilePic} className="profilePic mb-4" alt="My Profile Pic"></img>
            <h1>Welcome To My Website!</h1>
            <p>Below are my games that I had developed using Unity and C#</p>
            <p>You can also check out this links</p>
            <ul className="LinkList">
                <li className="ItchLink mr-5">
                    <a href="#">Itch.io</a>
                </li>
                <li>
                    <a href="#">LinkedIn Profile</a>
                </li>
            </ul>
        </div>
    )
}
export default IntroSection;